using System.ComponentModel.DataAnnotations;

namespace PrimeVision.APIIdentity.ViewModels
{
    public class DataUserRole
    {
        [Key]
        public string UserId { get; set; }

        public string RoleId { get; set; }

        public string Role { get; set; }

        public string Nominativo { get; set; }

        public string Email { get; set; }

        public string Username { get; set; }

        public string Address { get; set; }
    }
}
