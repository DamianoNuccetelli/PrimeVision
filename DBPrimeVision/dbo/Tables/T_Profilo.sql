CREATE TABLE [dbo].[T_Profilo] (
    [ID]          INT            IDENTITY (1, 1) NOT NULL,
    [Nickname]    NVARCHAR (100) NULL,
    [FotoProfilo] IMAGE          NULL,
    [UserID]      NVARCHAR (450) NULL,
    CONSTRAINT [PK_T_Profilo] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_AspNetUser_T_Profilo] FOREIGN KEY ([UserID]) REFERENCES [dbo].[AspNetUsers] ([Id])
);



