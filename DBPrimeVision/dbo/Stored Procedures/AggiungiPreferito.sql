
CREATE PROCEDURE AggiungiPreferito
    @FilmID int,
    @SerieID int,
    @ProfiloID int,
    @DocID int
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Preferito] (FilmID, SerieID, ProfiloID, DocID)
    VALUES (@FilmID, @SerieID, @ProfiloID, @DocID);
END