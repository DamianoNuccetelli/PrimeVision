CREATE TABLE [dbo].[T_Utente] (
    [ID]            INT            IDENTITY (1, 1) NOT NULL,
    [Nome]          NVARCHAR (100) NULL,
    [Cognome]       NVARCHAR (100) NULL,
    [Indirizzo]     NVARCHAR (200) NULL,
    [Password]      NVARCHAR (16)  NULL,
    [DataDiNascita] DATE           NULL,
    [Email]         NVARCHAR (200) NULL,
    [Sesso]         NVARCHAR (5)   NULL,
    [Nazionalita]   NCHAR (3)      NULL,
    [PianoID]       INT            NULL,
    CONSTRAINT [PK_T_Utente] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_Utente_T_Piano] FOREIGN KEY ([PianoID]) REFERENCES [dbo].[T_Piano] ([ID])
);

