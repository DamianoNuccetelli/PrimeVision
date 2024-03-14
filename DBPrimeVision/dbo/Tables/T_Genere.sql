CREATE TABLE [dbo].[T_Genere] (
    [ID]          INT            IDENTITY (1, 1) NOT NULL,
    [Nome]        NVARCHAR (100) NULL,
    [Descrizione] NVARCHAR (300) NULL,
    [IsPopolare]  BIT            NULL,
    CONSTRAINT [PK_T_Genere] PRIMARY KEY CLUSTERED ([ID] ASC)
);

