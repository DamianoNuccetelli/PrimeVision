CREATE PROCEDURE [dbo].[GetDocumentarioByTitle]
    @DocumentarioName NVARCHAR(100)
AS
BEGIN
    SELECT 
        D.Titolo AS 'Titolo del Documentario',
        D.Durata AS 'Durata del Documentario',
        D.DataUscita AS 'Data di Uscita',
        R.Nome AS 'Nome del Regista',
        R.Cognome AS 'Cognome del Regista',
		G.Nome AS 'Genere'
        
        
        
    FROM 
        T_Documentario D
	INNER JOIN
        T_Genere G ON D.GenereID = G.ID
    INNER JOIN 
        T_RelRegistaOpera RRO ON D.ID = RRO.FilmID
    INNER JOIN 
        T_Regista R ON RRO.RegistaID = R.ID
    WHERE 
        D.Titolo = @DocumentarioName;
END;