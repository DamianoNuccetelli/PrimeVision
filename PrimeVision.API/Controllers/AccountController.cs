using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Identity.UI.V4.Pages.Account.Internal;
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

        [HttpPost("Login")]
        public async Task<bool> Login(LoginVM model)
        {
            bool IsSuccess = false;
            try
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, false, lockoutOnFailure: false);
                IsSuccess = result.Succeeded;
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
                    UserName = model.Email,
                    Email = model.Email,
                    //Name = model.Username,
                    //Address = model.Address
                };
                // Register
                IdentityResult result = await _userManager.CreateAsync(user, model.Password);

                if (result.Succeeded)
                {
                    // N.B. Remember to update the ConfirmedMail in the ApplicationUser class (Data/ApplicationUser.cs) IdentityUser
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    IsSuccess = true;
                }
                foreach (IdentityError error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
            }
            catch (Exception ex)
            {
                string sErr = ex.Message;
                IsSuccess = false;
            }
            return IsSuccess;
        }
    }
}
