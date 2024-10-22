﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using PrimeVision.APIEF.Models;

namespace CLCommon.Models;

[Table("T_Lingua")]
public partial class TLingua
{
    [Key]
    [Column("ID")]
    public int Id { get; set; }

    [StringLength(50)]
    public string Nome { get; set; }

    [InverseProperty("Lingua")]
    public virtual ICollection<TRelLinguaOpera> TRelLinguaOperas { get; set; } = new List<TRelLinguaOpera>();
}