using System.ComponentModel.DataAnnotations;

namespace PrimeVision.API.ViewModels
{
    public class LoginVM
    {
        [Required(ErrorMessage = "Please enter your user Username")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Please enter your email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Please enter your password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Remember Me")]
        public bool RememberMe { get; set; }
    }
}
