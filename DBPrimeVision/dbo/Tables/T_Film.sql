CREATE TABLE [dbo].[T_Film] (
    [ID]         INT            IDENTITY (1, 1) NOT NULL,
    [Titolo]     NVARCHAR (100) NULL,
    [Durata]     INT            NULL,
    [DataUscita] DATE           NULL,
    [IsVietato]  BIT            NULL,
    [IsPremiato] BIT            NULL,
    [GenereID]   INT            NULL,
    [Locandina]  NVARCHAR (200) NULL,
    CONSTRAINT [PK_T_Film] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_Film_T_Genere] FOREIGN KEY ([GenereID]) REFERENCES [dbo].[T_Genere] ([ID])
);



