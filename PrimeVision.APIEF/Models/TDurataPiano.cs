﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace PrimeVision.APIEF.Models;

[Table("T_DurataPiano")]
public partial class TDurataPiano
{
    [Key]
    [Column("ID")]
    public int Id { get; set; }

    public DateOnly? DataInizio { get; set; }

    public DateOnly? DataFine { get; set; }

    [InverseProperty("DurataPiano")]
    public virtual ICollection<TPiano> TPianos { get; set; } = new List<TPiano>();
}