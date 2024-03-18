using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PrimeVision.API.Areas.Identity.Data;
using PrimeVision.API.ViewModels;

namespace PrimeVision.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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

        //[HttpPost("Login")]
        //public async Task<bool> Login(LoginVM model)
        //{
        //    bool IsSuccess = false;
        //    try
        //    {
        //        // This doesn't count login failures towards account lockout
        //        // To enable password failures to trigger account lockout, set lockoutOnFailure: true
        //        var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, false, lockoutOnFailure: false);
        //        IsSuccess = result.Succeeded;
        //    }
        //    catch (Exception ex)
        //    {
        //        string sErr = ex.Message;
        //        IsSuccess = false;
        //    }
        //    return IsSuccess;
        //}

        [HttpPost("Login")]
        public async Task<bool> Login(LoginVM model)
        {
            bool IsSuccess = false;
            try
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                // Remember to set isConfirmedMail to True
                var user = _userManager.Users.ToList().Find(u => u.Email == model.Email);
                if (user == null)
                {
                    return false;
                }

#pragma warning disable CS8602 // Dereference of a possibly null reference.
                if (user.Name.ToUpper() == user.NormalizedEmail)
                {
                    // This doesn't count login failures towards account lockout
                    // To enable password failures to trigger account lockout, set lockoutOnFailure: true

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
#pragma warning restore CS8602 // Dereference of a possibly null reference.

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
        public async Task<IActionResult> Register(RegisterVM model)
        {
            
            try
            {
                // Verifica che i dati di input siano stati forniti correttamente
                if (string.IsNullOrWhiteSpace(model.Username) || string.IsNullOrWhiteSpace(model.Address) ||
                    string.IsNullOrWhiteSpace(model.Email) || string.IsNullOrWhiteSpace(model.Password) ||
                    string.IsNullOrWhiteSpace(model.ConfirmPassword))
                {
                    return BadRequest("Tutti i campi sono obbligatori.");
                }


                // Verifica che i dati di input soddisfino i requisiti di validazione, se necessario
                if (!IsValidEmailAddress(model.Email))
                {
                    return BadRequest("Indirizzo email non valido.");
                }

                // Make control on password and confirm password. Identity make it first if the data are different
                if (model.Password != model.ConfirmPassword)
                {
                    return BadRequest("La password e la conferma della password non corrispondono.");
                }

                PrimeVisionUser user = new PrimeVisionUser
                {
                    UserName = model.Email,
                    Email = model.Email,
                    Name = model.Username,
                    Address = model.Address
                };
                // Register
                IdentityResult result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    // N.B. Remember to update the ConfirmedMail in the ApplicationUser class (Data/ApplicationUser.cs) IdentityUser
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    return Ok("Registrazione completata con successo.");
                }
                else
                {
                    return BadRequest("Errore durante la registrazione.");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Si è verificato un errore durante la registrazione.");
            }
           
        }

        // Metodo per verificare se un indirizzo email è valido GABRIELE
        private bool IsValidEmailAddress(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }
    }
}
