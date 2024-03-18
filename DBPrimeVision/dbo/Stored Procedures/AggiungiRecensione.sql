
CREATE PROCEDURE AggiungiRecensione
    @Descrizione nvarchar(300),
    @Stelle int,
    @Data date,
    @Titolo nvarchar(100),
    @ProfiloID int,
    @EpisodioID int,
    @StagioneID int,
    @SerieID int,
    @FilmID int,
    @DocID int
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Recensione] (Descrizione, Stelle, Data, Titolo, ProfiloID, EpisodioID, StagioneID, SerieID, FilmID, DocID)
    VALUES (@Descrizione, @Stelle, @Data, @Titolo, @ProfiloID, @EpisodioID, @StagioneID, @SerieID, @FilmID, @DocID);
END