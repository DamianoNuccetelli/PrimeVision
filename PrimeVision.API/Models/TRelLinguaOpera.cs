﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace PrimeVision.API.Models;

[Table("T_RelLinguaOpera")]
public partial class TRelLinguaOpera
{
    [Key]
    [Column("ID")]
    public int Id { get; set; }

    [Column("LinguaID")]
    public int? LinguaId { get; set; }

    [Column("FilmID")]
    public int? FilmId { get; set; }

    [Column("EpisodioID")]
    public int? EpisodioId { get; set; }

    [Column("DocID")]
    public int? DocId { get; set; }

    [ForeignKey("DocId")]
    [InverseProperty("TRelLinguaOperas")]
    public virtual TDocumentario Doc { get; set; }

    [ForeignKey("EpisodioId")]
    [InverseProperty("TRelLinguaOperas")]
    public virtual TEpisodio Episodio { get; set; }

    [ForeignKey("FilmId")]
    [InverseProperty("TRelLinguaOperas")]
    public virtual TFilm Film { get; set; }

    [ForeignKey("LinguaId")]
    [InverseProperty("TRelLinguaOperas")]
    public virtual TLingua Lingua { get; set; }
}