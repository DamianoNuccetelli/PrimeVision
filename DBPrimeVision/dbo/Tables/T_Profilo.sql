CREATE TABLE [dbo].[T_Profilo] (
    [ID]          INT            IDENTITY (1, 1) NOT NULL,
    [Nickname]    NVARCHAR (100) NULL,
    [FotoProfilo] IMAGE          NULL,
    [UtenteID]    INT            NULL,
    CONSTRAINT [PK_T_Profilo] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_Profilo_T_Utente] FOREIGN KEY ([UtenteID]) REFERENCES [dbo].[T_Utente] ([ID])
);

