CREATE TABLE [dbo].[T_RelRegistaOpera] (
    [ID]         INT IDENTITY (1, 1) NOT NULL,
    [RegistaID]  INT NULL,
    [FilmID]     INT NULL,
    [EpisodioID] INT NULL,
    [DocID]      INT NULL,
    CONSTRAINT [PK_T_RelRegistaOpera] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_RelRegistaOpera_T_Documentario] FOREIGN KEY ([DocID]) REFERENCES [dbo].[T_Documentario] ([ID]),
    CONSTRAINT [FK_T_RelRegistaOpera_T_Episodio] FOREIGN KEY ([EpisodioID]) REFERENCES [dbo].[T_Episodio] ([ID]),
    CONSTRAINT [FK_T_RelRegistaOpera_T_Film] FOREIGN KEY ([FilmID]) REFERENCES [dbo].[T_Film] ([ID]),
    CONSTRAINT [FK_T_RelRegistaOpera_T_Regista] FOREIGN KEY ([RegistaID]) REFERENCES [dbo].[T_Regista] ([ID])
);

