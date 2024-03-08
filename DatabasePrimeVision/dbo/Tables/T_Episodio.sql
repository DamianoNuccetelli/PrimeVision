CREATE TABLE [dbo].[T_Episodio] (
    [ID]             INT            IDENTITY (1, 1) NOT NULL,
    [Durata]         INT            NULL,
    [Titolo]         NVARCHAR (100) NULL,
    [Descrizione]    NVARCHAR (300) NULL,
    [NumeroEpisodio] INT            NULL,
    [StagioneID]     INT            NULL,
    CONSTRAINT [PK_T_Episodio] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_Episodio_T_Stagione] FOREIGN KEY ([StagioneID]) REFERENCES [dbo].[T_Stagione] ([ID])
);

