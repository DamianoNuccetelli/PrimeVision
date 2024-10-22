﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using PrimeVision.APIEF.Models;

namespace CLCommon.Models;

[Table("T_RelRegistaOpera")]
public partial class TRelRegistaOpera
{
    [Key]
    [Column("ID")]
    public int Id { get; set; }

    [Column("RegistaID")]
    public int? RegistaId { get; set; }

    [Column("FilmID")]
    public int? FilmId { get; set; }

    [Column("SerieID")]
    public int? SerieId { get; set; }

    [Column("DocID")]
    public int? DocId { get; set; }

    [ForeignKey("DocId")]
    [InverseProperty("TRelRegistaOperas")]
    public virtual TDocumentario Doc { get; set; }

    [ForeignKey("FilmId")]
    [InverseProperty("TRelRegistaOperas")]
    public virtual TFilm Film { get; set; }

    [ForeignKey("RegistaId")]
    [InverseProperty("TRelRegistaOperas")]
    public virtual TRegistum Regista { get; set; }

    [ForeignKey("SerieId")]
    [InverseProperty("TRelRegistaOperas")]
    public virtual TSerie Serie { get; set; }
}