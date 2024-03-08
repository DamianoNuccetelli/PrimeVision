CREATE TABLE [dbo].[T_Preferito] (
    [ID]        INT IDENTITY (1, 1) NOT NULL,
    [FilmID]    INT NULL,
    [SerieID]   INT NULL,
    [ProfiloID] INT NULL,
    [DocID]     INT NULL,
    CONSTRAINT [PK_T_Preferito] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_Preferito_T_Documentario] FOREIGN KEY ([DocID]) REFERENCES [dbo].[T_Documentario] ([ID]),
    CONSTRAINT [FK_T_Preferito_T_Film] FOREIGN KEY ([FilmID]) REFERENCES [dbo].[T_Film] ([ID]),
    CONSTRAINT [FK_T_Preferito_T_Profilo] FOREIGN KEY ([ProfiloID]) REFERENCES [dbo].[T_Profilo] ([ID]),
    CONSTRAINT [FK_T_Preferito_T_Serie] FOREIGN KEY ([SerieID]) REFERENCES [dbo].[T_Serie] ([ID])
);

