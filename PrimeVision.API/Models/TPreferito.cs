﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace PrimeVision.API.Models;

[Table("T_Preferito")]
public partial class TPreferito
{
    [Key]
    [Column("ID")]
    public int Id { get; set; }

    [Column("FilmID")]
    public int? FilmId { get; set; }

    [Column("SerieID")]
    public int? SerieId { get; set; }

    [Column("ProfiloID")]
    public int? ProfiloId { get; set; }

    [Column("DocID")]
    public int? DocId { get; set; }

    [ForeignKey("DocId")]
    [InverseProperty("TPreferitos")]
    public virtual TDocumentario Doc { get; set; }

    [ForeignKey("FilmId")]
    [InverseProperty("TPreferitos")]
    public virtual TFilm Film { get; set; }

    [ForeignKey("ProfiloId")]
    [InverseProperty("TPreferitos")]
    public virtual TProfilo Profilo { get; set; }

    [ForeignKey("SerieId")]
    [InverseProperty("TPreferitos")]
    public virtual TSerie Serie { get; set; }
}