
CREATE PROCEDURE AggiungiCronologia
    @DataVisione date,
    @ProfiloID int,
    @EpisodioID int,
    @FilmID int,
    @DocID int
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Cronologia] (DataVisione, ProfiloID, EpisodioID, FilmID, DocID)
    VALUES (@DataVisione, @ProfiloID, @EpisodioID, @FilmID, @DocID);
END