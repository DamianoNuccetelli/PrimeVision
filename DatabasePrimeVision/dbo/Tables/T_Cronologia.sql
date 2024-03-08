CREATE TABLE [dbo].[T_Cronologia] (
    [ID]          INT  IDENTITY (1, 1) NOT NULL,
    [DataVisione] DATE NULL,
    [ProfiloID]   INT  NULL,
    [EpisodioID]  INT  NULL,
    [FilmID]      INT  NULL,
    [DocID]       INT  NULL,
    CONSTRAINT [PK_T_Cronologia] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_Cronologia_T_Documentario] FOREIGN KEY ([DocID]) REFERENCES [dbo].[T_Documentario] ([ID]),
    CONSTRAINT [FK_T_Cronologia_T_Episodio] FOREIGN KEY ([EpisodioID]) REFERENCES [dbo].[T_Episodio] ([ID]),
    CONSTRAINT [FK_T_Cronologia_T_Film] FOREIGN KEY ([FilmID]) REFERENCES [dbo].[T_Film] ([ID]),
    CONSTRAINT [FK_T_Cronologia_T_Profilo] FOREIGN KEY ([ProfiloID]) REFERENCES [dbo].[T_Profilo] ([ID])
);

