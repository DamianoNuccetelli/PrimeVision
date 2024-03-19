CREATE PROCEDURE [dbo].[GetFilmByRegista]
    @NomeRegista NVARCHAR(100),
    @CognomeRegista NVARCHAR(100)
AS
BEGIN
    SELECT
        F.Titolo AS 'Titolo del Film',
        F.Durata AS 'Durata',
        F.DataUscita AS 'Data di Uscita',
        G.Nome AS 'Genere'
    FROM
        T_Film F
    INNER JOIN
        T_RelRegistaOpera RRO ON F.ID = RRO.FilmID
    INNER JOIN
        T_Regista R ON RRO.RegistaID = R.ID
    INNER JOIN
        T_Genere G ON F.GenereID = G.ID
    WHERE
        R.Nome = @NomeRegista AND
        R.Cognome = @CognomeRegista;
END;