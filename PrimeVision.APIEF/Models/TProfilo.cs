﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace PrimeVision.APIEF.Models;

[Table("T_Profilo")]
public partial class TProfilo
{
    [Key]
    [Column("ID")]
    public int Id { get; set; }

    [StringLength(100)]
    public string Nickname { get; set; }

    [Column(TypeName = "image")]
    public byte[] FotoProfilo { get; set; }

    [Column("UserID")]
    [StringLength(450)]
    public string UserId { get; set; }

    [InverseProperty("Profilo")]
    public virtual ICollection<TCronologium> TCronologia { get; set; } = new List<TCronologium>();

    [InverseProperty("Profilo")]
    public virtual ICollection<TPreferito> TPreferitos { get; set; } = new List<TPreferito>();

    [InverseProperty("Profilo")]
    public virtual ICollection<TRecensione> TRecensiones { get; set; } = new List<TRecensione>();
}