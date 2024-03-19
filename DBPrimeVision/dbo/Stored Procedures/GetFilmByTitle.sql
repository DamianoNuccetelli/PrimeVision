CREATE PROCEDURE [dbo].[GetFilmByTitle]
    @FilmName NVARCHAR(100)
AS
BEGIN
    SELECT 
        F.Titolo AS 'Titolo del Film',
        F.Durata AS 'Durata del Film',
        F.DataUscita AS 'Data di Uscita',
        R.Nome AS 'Nome del Regista',
        R.Cognome AS 'Cognome del Regista',
		G.Nome AS 'Genere'
        
        
        
    FROM 
        T_Film F
	INNER JOIN
        T_Genere G ON F.GenereID = G.ID
    INNER JOIN 
        T_RelRegistaOpera RRO ON F.ID = RRO.FilmID
    INNER JOIN 
        T_Regista R ON RRO.RegistaID = R.ID
    WHERE 
        F.Titolo = @FilmName;
END;