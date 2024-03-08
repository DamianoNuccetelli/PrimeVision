CREATE TABLE [dbo].[T_Recensione] (
    [ID]          INT            IDENTITY (1, 1) NOT NULL,
    [Descrizione] NVARCHAR (300) NULL,
    [Stelle]      INT            NULL,
    [Data]        DATE           NULL,
    [Titolo]      NVARCHAR (100) NULL,
    [ProfiloID]   INT            NULL,
    [EpisodioID]  INT            NULL,
    [StagioneID]  INT            NULL,
    [SerieID]     INT            NULL,
    [FilmID]      INT            NULL,
    [DocID]       INT            NULL,
    CONSTRAINT [PK_T_Recensione] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_Recensione_T_Documentario] FOREIGN KEY ([DocID]) REFERENCES [dbo].[T_Documentario] ([ID]),
    CONSTRAINT [FK_T_Recensione_T_Episodio] FOREIGN KEY ([EpisodioID]) REFERENCES [dbo].[T_Episodio] ([ID]),
    CONSTRAINT [FK_T_Recensione_T_Film] FOREIGN KEY ([FilmID]) REFERENCES [dbo].[T_Film] ([ID]),
    CONSTRAINT [FK_T_Recensione_T_Profilo] FOREIGN KEY ([ProfiloID]) REFERENCES [dbo].[T_Profilo] ([ID]),
    CONSTRAINT [FK_T_Recensione_T_Serie] FOREIGN KEY ([SerieID]) REFERENCES [dbo].[T_Serie] ([ID]),
    CONSTRAINT [FK_T_Recensione_T_Stagione] FOREIGN KEY ([StagioneID]) REFERENCES [dbo].[T_Stagione] ([ID])
);

