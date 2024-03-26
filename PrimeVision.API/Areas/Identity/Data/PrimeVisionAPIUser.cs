using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace PrimeVision.API.Areas.Identity.Data;

// Add profile data for application users by adding properties to the PrimeVisionAPIUser class
public class PrimeVisionAPIUser : IdentityUser
{

    [StringLength(100)]
    [MaxLength(100)]
    [Required]
    public string? Name { get; set; }

    [StringLength(256)]
    [MaxLength(256)]
    public string? Address { get; set; }
}

