CREATE TABLE [dbo].[T_RelLinguaOpera] (
    [ID]         INT IDENTITY (1, 1) NOT NULL,
    [LinguaID]   INT NULL,
    [FilmID]     INT NULL,
    [EpisodioID] INT NULL,
    [DocID]      INT NULL,
    CONSTRAINT [PK_T_RelLinguaOpera] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_RelLinguaOpera_T_Documentario] FOREIGN KEY ([DocID]) REFERENCES [dbo].[T_Documentario] ([ID]),
    CONSTRAINT [FK_T_RelLinguaOpera_T_Episodio] FOREIGN KEY ([EpisodioID]) REFERENCES [dbo].[T_Episodio] ([ID]),
    CONSTRAINT [FK_T_RelLinguaOpera_T_Film] FOREIGN KEY ([FilmID]) REFERENCES [dbo].[T_Film] ([ID]),
    CONSTRAINT [FK_T_RelLinguaOpera_T_Lingua] FOREIGN KEY ([LinguaID]) REFERENCES [dbo].[T_Lingua] ([ID])
);

