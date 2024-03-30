using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Identity.UI.V4.Pages.Account.Internal;
using Microsoft.AspNetCore.Mvc;
using PrimeVision.APIIdentity.ViewModels;
using PrimeVision.APIIdentity.Areas.Identity.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.WebUtilities;
using System.Text;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using Microsoft.EntityFrameworkCore;


namespace PrimeVision.APIIdentity.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors(PolicyName = "enablecorsPrimeVision")]
    public class AccountController : ControllerBase
    {
        // For Login - Logout
        private readonly SignInManager<PrimeVisionUser> _signInManager;

        // For Register
        private readonly UserManager<PrimeVisionUser> _userManager;


        public AccountController(SignInManager<PrimeVisionUser> signInManager, UserManager<PrimeVisionUser> userManager)
        {
            this._signInManager = signInManager;
            this._userManager = userManager;
        }


        [HttpPost("Login")]
        public async Task<bool> Login(LoginVM model)
        {
            bool IsSuccess = false;
            try
            {
            
                var user = _userManager.Users.ToList().Find(u => u.UserName == model.Username);
                if (user == null)
                {
                    return false;
                }

                if (user.UserName.ToUpper() == user.NormalizedUserName)
                {

                    var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, model.RememberMe, lockoutOnFailure: false);
                    IsSuccess = result.Succeeded;
                }
                else
                {

                    if (!user.EmailConfirmed)
                    {
                        return false;
                    }
                    else
                    {
                        // https://stackoverflow.com/questions/26430094/asp-net-identity-provider-signinmanager-keeps-returning-failure
                        var userIsSigned = await _userManager.CheckPasswordAsync(user, model.Password);

                        var otherResult = await _signInManager.PasswordSignInAsync(user.UserName, model.Password, model.RememberMe, lockoutOnFailure: false);
                        IsSuccess = otherResult.Succeeded;


                    }
                }

            }
            catch (Exception ex)
            {
                string sErr = ex.Message;
                IsSuccess = false;
            }
            return IsSuccess;
        }

        [HttpPost("Logout")]
        public async Task<bool> Logout()
        {
            bool IsSuccess = false;
            try
            {
                await _signInManager.SignOutAsync();
                IsSuccess = true;
            }
            catch (Exception ex)
            {
                string sErr = ex.Message;
                IsSuccess = false;
            }
            return IsSuccess;
        }

        [HttpPost("Register")]
        public async Task<bool> Register(RegisterVM model)
        {
            bool IsSuccess = false;
            try
            {
                // Make control on password and confirm password. Identity make it first if the data are different
                if (model.Password != model.ConfirmPassword)
                {
                    return false;
                }

                PrimeVisionUser user = new PrimeVisionUser
                {
                    UserName = model.Username,
                    Email = model.Email,
                    Name = model.Name,
                    Address = model.Address
                };
                // Register
                IdentityResult result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    IsSuccess = true;
                }
                foreach (IdentityError error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }

                if (IsSuccess)
                {
                    

                    var tokenGenerated = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    byte[] tokenGeneratedBytes = Encoding.UTF8.GetBytes(tokenGenerated);
                    string code = WebEncoders.Base64UrlEncode(tokenGeneratedBytes);
                    string subject = "Mail di conferma per accedere al Progetto PrimeVision";
                    string url = "http://localhost:3000/EmailVerification?userId=" + user.Id + "&code=" + code;
                    string style = @"
                                        <style>
                                            body {
                                                font-family: Arial, sans-serif;
                                                background-color: #f4f4f4;
                                                margin: 0;
                                                padding: 0;
                                            }
                                            .container {
                                                max-width: 600px;
                                                margin: 20px auto;
                                                padding: 20px;
                                                background-color: #fff;
                                                border-radius: 10px;
                                                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                            }
                                            h1 {
                                                color: #333;
                                            }
                                            p {
                                                color: #666;
                                                margin-bottom: 20px;
                                            }
                                            a {
                                                color: #fff;
                                                background-color: #007bff;
                                                text-decoration: none;
                                                padding: 10px 20px;
                                                border-radius: 5px;
                                                display: inline-block;
                                            }
                                            a:hover {
                                                background-color: #0056b3;
                                            }
                                        </style>";
                    string body = string.Format(@"
                                                <!DOCTYPE html>
                                                <html lang=""it"">
                                                <head>
                                                    <meta charset=""UTF-8"">
                                                    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
                                                    <title>Conferma Email</title>
                                                    {0}
                                                </head>
                                                <body>
                                                    <div class=""container"">
                                                        <h1>Benvenuto, {1}!</h1>
                                                        <p>Per verificare la tua email, <a href='{2}'>clicca qui</a>.</p>
                                                    </div>
                                                </body>
                                                </html>", style, model.Username, url);
                    string emailTo = "damianonuccetelli@gmail.com"; // Decommentare model.Email;
                    string emailCC = "damianonuccetelli@gmail.com";
                   
                    string res = await sendEmailThroughWebApiAsync(subject, body, emailTo, emailCC);
                    if (res != "")
                    {
                        _userManager.DeleteAsync(user);
                        return false;
                    }
                }

            }
            catch (Exception ex)
            {
                string sErr = ex.Message;
                IsSuccess = false;
            }
            return IsSuccess;
        }

        [AllowAnonymous]
        [HttpPost("ConfirmEmailAsync")]
        public async Task<bool> ConfirmEmailAsync(string userId, string code)
        {

            bool IsSuccess = false;
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return IsSuccess;
            }
            // https://stackoverflow.com/questions/38781295/asp-net-core-identity-invalid-token-on-confirmation-email
            code = Encoding.UTF8.GetString(WebEncoders.Base64UrlDecode(code));
            var result = await _userManager.ConfirmEmailAsync(user, code);
            IsSuccess = result.Succeeded;
            return IsSuccess;
        }

        private async Task<string> sendEmailThroughWebApiAsync(string subject, string body, string emailTo, string emailCC)
        {
            string sMsg = string.Empty;
            string Host = "smtp.office365.com";
            int Port = 587;
            string mailFrom = "studente3@vivasoft.it";
            string mailFromPassword = "StudenteAcademy2024!";
            MimeMessage mail = new MimeMessage();
            mail.From.Add(new MailboxAddress("", mailFrom));
            mail.To.Add(new MailboxAddress("", emailTo));
            mail.Cc.Add(new MailboxAddress("", emailCC));
            mail.Subject = subject;
            var bodyBuilder = new BodyBuilder();
            bodyBuilder.HtmlBody = body;
            // TODO bodyBuilder.Attachments.Add(file);
            mail.Body = bodyBuilder.ToMessageBody();

            // https://www.loginradius.com/blog/engineering/how-to-send-emails-through-csharp-dotnet-using-smtp/
            // Here we have used Gmail's SMTP server to send emails (From Mail Address) so we have to enable the Less Secure Apps in our from mail address account
            // by enabling Allow less secure apps else we will get the error from Gmail's SMTP server(The SMTP server requires a secure connection or the client was not authenticated.The server response was: 5.7.0 Authentication Required.)

            // https://stackoverflow.com/questions/9851319/how-to-add-smtp-hotmail-account-to-send-mail
            using (SmtpClient client = new())
            {
                try
                {
                    // USING NETCore.MailKit
                    await client.ConnectAsync(Host, Port, SecureSocketOptions.StartTls);
                    await client.AuthenticateAsync(mailFrom, mailFromPassword);
                    await client.SendAsync(mail);
                }
                catch (Exception ex)
                {
                    //log an error message or throw an exception, or both.
                    // throw;
                    sMsg = ex.Message;
                }
                finally
                {
                    await client.DisconnectAsync(true);
                    client.Dispose();
                }
            }

            return sMsg;
        }

        [HttpGet("GetAllUserAsync")]
        public async Task<List<PrimeVisionUser>> GetAllUserAsync()
        {
            List<PrimeVisionUser> listUser = new List<PrimeVisionUser>();
            try
            {
                listUser = await _userManager.Users.ToListAsync();
            }
            catch (Exception ex)
            {
                string sErr = ex.Message;
            }
            return listUser.ToList();
        }
    }
}

