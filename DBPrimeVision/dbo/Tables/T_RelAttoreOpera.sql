CREATE TABLE [dbo].[T_RelAttoreOpera] (
    [ID]       INT IDENTITY (1, 1) NOT NULL,
    [AttoreID] INT NULL,
    [FilmID]   INT NULL,
    [SerieID]  INT NULL,
    CONSTRAINT [PK_T_RelAttoreOpera] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_RelAttoreOpera_T_Attore] FOREIGN KEY ([AttoreID]) REFERENCES [dbo].[T_Attore] ([ID]),
    CONSTRAINT [FK_T_RelAttoreOpera_T_Film] FOREIGN KEY ([FilmID]) REFERENCES [dbo].[T_Film] ([ID]),
    CONSTRAINT [FK_T_RelAttoreOpera_T_Serie] FOREIGN KEY ([SerieID]) REFERENCES [dbo].[T_Serie] ([ID])
);



