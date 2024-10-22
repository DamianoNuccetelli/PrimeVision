﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace PrimeVision.APIEF.Models;

public partial class PrimeVisionContext : DbContext
{
    public PrimeVisionContext()
    {
    }

    public PrimeVisionContext(DbContextOptions<PrimeVisionContext> options)
        : base(options)
    {
    }

    public virtual DbSet<TAttore> TAttores { get; set; }

    public virtual DbSet<TCronologium> TCronologia { get; set; }

    public virtual DbSet<TDocumentario> TDocumentarios { get; set; }

    public virtual DbSet<TDurataPiano> TDurataPianos { get; set; }

    public virtual DbSet<TEpisodio> TEpisodios { get; set; }

    public virtual DbSet<TFilm> TFilms { get; set; }

    public virtual DbSet<TGenere> TGeneres { get; set; }

    public virtual DbSet<TLingua> TLinguas { get; set; }

    public virtual DbSet<TPiano> TPianos { get; set; }

    public virtual DbSet<TPreferito> TPreferitos { get; set; }

    public virtual DbSet<TProfilo> TProfilos { get; set; }

    public virtual DbSet<TRecensione> TRecensiones { get; set; }

    public virtual DbSet<TRegistum> TRegista { get; set; }

    public virtual DbSet<TRelAttoreOpera> TRelAttoreOperas { get; set; }

    public virtual DbSet<TRelLinguaOpera> TRelLinguaOperas { get; set; }

    public virtual DbSet<TRelRegistaOpera> TRelRegistaOperas { get; set; }

    public virtual DbSet<TSerie> TSeries { get; set; }

    public virtual DbSet<TStagione> TStagiones { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TAttore>(entity =>
        {
            entity.Property(e => e.Nazionalita).IsFixedLength();
        });

        modelBuilder.Entity<TCronologium>(entity =>
        {
            entity.HasOne(d => d.Doc).WithMany(p => p.TCronologia).HasConstraintName("FK_T_Cronologia_T_Documentario");

            entity.HasOne(d => d.Episodio).WithMany(p => p.TCronologia).HasConstraintName("FK_T_Cronologia_T_Episodio");

            entity.HasOne(d => d.Film).WithMany(p => p.TCronologia).HasConstraintName("FK_T_Cronologia_T_Film");

            entity.HasOne(d => d.Profilo).WithMany(p => p.TCronologia).HasConstraintName("FK_T_Cronologia_T_Profilo");
        });

        modelBuilder.Entity<TDocumentario>(entity =>
        {
            entity.HasOne(d => d.Genere).WithMany(p => p.TDocumentarios).HasConstraintName("FK_T_Documentario_T_Genere");
        });

        modelBuilder.Entity<TEpisodio>(entity =>
        {
            entity.HasOne(d => d.Stagione).WithMany(p => p.TEpisodios).HasConstraintName("FK_T_Episodio_T_Stagione");
        });

        modelBuilder.Entity<TFilm>(entity =>
        {
            entity.HasOne(d => d.Genere).WithMany(p => p.TFilms).HasConstraintName("FK_T_Film_T_Genere");
        });

        modelBuilder.Entity<TPiano>(entity =>
        {
            entity.HasOne(d => d.DurataPiano).WithMany(p => p.TPianos).HasConstraintName("FK_T_Piano_T_DurataPiano");
        });

        modelBuilder.Entity<TPreferito>(entity =>
        {
            entity.HasOne(d => d.Doc).WithMany(p => p.TPreferitos).HasConstraintName("FK_T_Preferito_T_Documentario");

            entity.HasOne(d => d.Film).WithMany(p => p.TPreferitos).HasConstraintName("FK_T_Preferito_T_Film");

            entity.HasOne(d => d.Profilo).WithMany(p => p.TPreferitos).HasConstraintName("FK_T_Preferito_T_Profilo");

            entity.HasOne(d => d.Serie).WithMany(p => p.TPreferitos).HasConstraintName("FK_T_Preferito_T_Serie");
        });

        modelBuilder.Entity<TRecensione>(entity =>
        {
            entity.HasOne(d => d.Doc).WithMany(p => p.TRecensiones).HasConstraintName("FK_T_Recensione_T_Documentario");

            entity.HasOne(d => d.Episodio).WithMany(p => p.TRecensiones).HasConstraintName("FK_T_Recensione_T_Episodio");

            entity.HasOne(d => d.Film).WithMany(p => p.TRecensiones).HasConstraintName("FK_T_Recensione_T_Film");

            entity.HasOne(d => d.Profilo).WithMany(p => p.TRecensiones).HasConstraintName("FK_T_Recensione_T_Profilo");

            entity.HasOne(d => d.Serie).WithMany(p => p.TRecensiones).HasConstraintName("FK_T_Recensione_T_Serie");

            entity.HasOne(d => d.Stagione).WithMany(p => p.TRecensiones).HasConstraintName("FK_T_Recensione_T_Stagione");
        });

        modelBuilder.Entity<TRegistum>(entity =>
        {
            entity.Property(e => e.Nazionalita).IsFixedLength();
        });

        modelBuilder.Entity<TRelAttoreOpera>(entity =>
        {
            entity.HasOne(d => d.Attore).WithMany(p => p.TRelAttoreOperas).HasConstraintName("FK_T_RelAttoreOpera_T_Attore");

            entity.HasOne(d => d.Film).WithMany(p => p.TRelAttoreOperas).HasConstraintName("FK_T_RelAttoreOpera_T_Film");

            entity.HasOne(d => d.Serie).WithMany(p => p.TRelAttoreOperas).HasConstraintName("FK_T_RelAttoreOpera_T_Serie");
        });

        modelBuilder.Entity<TRelLinguaOpera>(entity =>
        {
            entity.HasOne(d => d.Doc).WithMany(p => p.TRelLinguaOperas).HasConstraintName("FK_T_RelLinguaOpera_T_Documentario");

            entity.HasOne(d => d.Episodio).WithMany(p => p.TRelLinguaOperas).HasConstraintName("FK_T_RelLinguaOpera_T_Episodio");

            entity.HasOne(d => d.Film).WithMany(p => p.TRelLinguaOperas).HasConstraintName("FK_T_RelLinguaOpera_T_Film");

            entity.HasOne(d => d.Lingua).WithMany(p => p.TRelLinguaOperas).HasConstraintName("FK_T_RelLinguaOpera_T_Lingua");
        });

        modelBuilder.Entity<TRelRegistaOpera>(entity =>
        {
            entity.HasOne(d => d.Doc).WithMany(p => p.TRelRegistaOperas).HasConstraintName("FK_T_RelRegistaOpera_T_Documentario");

            entity.HasOne(d => d.Film).WithMany(p => p.TRelRegistaOperas).HasConstraintName("FK_T_RelRegistaOpera_T_Film");

            entity.HasOne(d => d.Regista).WithMany(p => p.TRelRegistaOperas).HasConstraintName("FK_T_RelRegistaOpera_T_Regista");

            entity.HasOne(d => d.Serie).WithMany(p => p.TRelRegistaOperas).HasConstraintName("FK_T_RelRegistaOpera_T_Serie");
        });

        modelBuilder.Entity<TSerie>(entity =>
        {
            entity.HasOne(d => d.Genere).WithMany(p => p.TSeries).HasConstraintName("FK_T_Serie_T_Genere");
        });

        modelBuilder.Entity<TStagione>(entity =>
        {
            entity.HasOne(d => d.Serie).WithMany(p => p.TStagiones).HasConstraintName("FK_T_Stagione_T_Serie");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}