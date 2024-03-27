using System.ComponentModel.DataAnnotations;

namespace PrimeVision.APIIdentity.ViewModels
{
    public class RegisterVM
    {
        [Required(ErrorMessage = "Please enter your username")]
        [DataType(DataType.Text)]
        public string? Username { get; set; }

        [Required(ErrorMessage = "Please enter your email")]
        [DataType(DataType.EmailAddress)]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Please enter your password")]
        [DataType(DataType.Password)]
        public string? Password { get; set; }

        [Compare("Password", ErrorMessage = "Password and Confirm Password do not match")]
        [Required(ErrorMessage = "Please confirm your password")]
        [Display(Name = "Confirm Password")]
        [DataType(DataType.Password)]
        public string? ConfirmPassword { get; set; }
        [DataType(DataType.MultilineText)]

        public string? Name { get; set; }
        public string? Address { get; set; }
    }
}
