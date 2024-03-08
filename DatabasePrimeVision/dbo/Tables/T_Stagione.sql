CREATE TABLE [dbo].[T_Stagione] (
    [ID]             INT            IDENTITY (1, 1) NOT NULL,
    [NumeroStagione] INT            NULL,
    [Descrizione]    NVARCHAR (300) NULL,
    [SerieID]        INT            NULL,
    CONSTRAINT [PK_T_Stagione] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_Stagione_T_Serie] FOREIGN KEY ([SerieID]) REFERENCES [dbo].[T_Serie] ([ID])
);

