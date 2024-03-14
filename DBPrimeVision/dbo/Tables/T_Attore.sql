CREATE TABLE [dbo].[T_Attore] (
    [ID]            INT            IDENTITY (1, 1) NOT NULL,
    [Nome]          NVARCHAR (100) NULL,
    [Cognome]       NVARCHAR (100) NULL,
    [Nazionalita]   NCHAR (3)      NULL,
    [DataDiNascita] DATE           NULL,
    [IsPremiato]    BIT            NULL,
    CONSTRAINT [PK_T_Attore] PRIMARY KEY CLUSTERED ([ID] ASC)
);

