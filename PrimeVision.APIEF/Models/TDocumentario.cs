﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace PrimeVision.APIEF.Models;

[Table("T_Documentario")]
public partial class TDocumentario
{
    [Key]
    [Column("ID")]
    public int Id { get; set; }

    [StringLength(100)]
    public string Titolo { get; set; }

    public int? Durata { get; set; }

    public DateOnly? DataUscita { get; set; }

    [Column("GenereID")]
    public int? GenereId { get; set; }

    [ForeignKey("GenereId")]
    [InverseProperty("TDocumentarios")]
    public virtual TGenere Genere { get; set; }

    [InverseProperty("Doc")]
    public virtual ICollection<TCronologium> TCronologia { get; set; } = new List<TCronologium>();

    [InverseProperty("Doc")]
    public virtual ICollection<TPreferito> TPreferitos { get; set; } = new List<TPreferito>();

    [InverseProperty("Doc")]
    public virtual ICollection<TRecensione> TRecensiones { get; set; } = new List<TRecensione>();

    [InverseProperty("Doc")]
    public virtual ICollection<TRelLinguaOpera> TRelLinguaOperas { get; set; } = new List<TRelLinguaOpera>();

    [InverseProperty("Doc")]
    public virtual ICollection<TRelRegistaOpera> TRelRegistaOperas { get; set; } = new List<TRelRegistaOpera>();
}