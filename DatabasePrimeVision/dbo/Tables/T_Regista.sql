CREATE TABLE [dbo].[T_Regista] (
    [ID]            INT            IDENTITY (1, 1) NOT NULL,
    [Nome]          NVARCHAR (100) NULL,
    [Cognome]       NVARCHAR (100) NULL,
    [DataDiNascita] DATE           NULL,
    [Nazionalita]   NCHAR (3)      NULL,
    [NumeroOscar]   INT            NULL,
    CONSTRAINT [PK_T_Regista] PRIMARY KEY CLUSTERED ([ID] ASC)
);

