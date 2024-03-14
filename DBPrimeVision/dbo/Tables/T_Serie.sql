CREATE TABLE [dbo].[T_Serie] (
    [ID]         INT            IDENTITY (1, 1) NOT NULL,
    [Titolo]     NVARCHAR (100) NULL,
    [Stagioni]   INT            NULL,
    [DataUscita] DATE           NULL,
    [IsVietato]  BIT            NULL,
    [IsPremiato] BIT            NULL,
    [GenereID]   INT            NULL,
    CONSTRAINT [PK_T_Serie] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_Serie_T_Genere] FOREIGN KEY ([GenereID]) REFERENCES [dbo].[T_Genere] ([ID])
);

