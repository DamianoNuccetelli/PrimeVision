CREATE TABLE [dbo].[T_DurataPiano] (
    [ID]         INT  IDENTITY (1, 1) NOT NULL,
    [DataInizio] DATE NULL,
    [DataFine]   DATE NULL,
    CONSTRAINT [PK_T_DurataPiano] PRIMARY KEY CLUSTERED ([ID] ASC)
);

