CREATE TABLE [dbo].[T_Piano] (
    [ID]            INT             IDENTITY (1, 1) NOT NULL,
    [Nome]          NVARCHAR (100)  NULL,
    [Descrizione]   NVARCHAR (300)  NULL,
    [Costo]         DECIMAL (10, 2) NULL,
    [DurataPianoID] INT             NULL,
    CONSTRAINT [PK_T_Piano] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_T_Piano_T_DurataPiano] FOREIGN KEY ([DurataPianoID]) REFERENCES [dbo].[T_DurataPiano] ([ID])
);

