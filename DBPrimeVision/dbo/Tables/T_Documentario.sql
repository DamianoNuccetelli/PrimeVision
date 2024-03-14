CREATE TABLE [dbo].[T_Documentario] (
    [ID]         INT            IDENTITY (1, 1) NOT NULL,
    [Titolo]     NVARCHAR (100) NULL,
    [Durata]     INT            NULL,
    [DataUscita] DATE           NULL,
    [GenereID]   INT            NULL,
    CONSTRAINT [PK_T_Documentario] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_Documentario_T_Genere] FOREIGN KEY ([GenereID]) REFERENCES [dbo].[T_Genere] ([ID])
);

