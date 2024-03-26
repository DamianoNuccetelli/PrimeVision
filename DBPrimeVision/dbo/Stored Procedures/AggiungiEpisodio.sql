
CREATE PROCEDURE AggiungiEpisodio
    @Durata int,
    @Titolo nvarchar(100),
    @Descrizione nvarchar(300),
    @NumeroEpisodio int,
    @StagioneID int
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Episodio] (Durata, Titolo, Descrizione, NumeroEpisodio, StagioneID)
    VALUES (@Durata, @Titolo, @Descrizione, @NumeroEpisodio, @StagioneID);
END