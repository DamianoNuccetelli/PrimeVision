CREATE PROCEDURE [dbo].[GetSerieByActor]
    @NomeAttore NVARCHAR(100),
	@CognomeAttore NVARCHAR(100)
AS
BEGIN
    SELECT
        S.Titolo AS 'Titolo della Serie',
        S.Stagioni AS 'Stagioni',
        S.DataUscita AS 'Data di Uscita',
        G.Nome AS 'Genere'
    FROM
        T_Serie S
    INNER JOIN
        T_RelAttoreOpera RAO ON S.ID = RAO.SerieID
    INNER JOIN
        T_Attore A ON RAO.AttoreID = A.ID
    INNER JOIN
        T_Genere G ON S.GenereID = G.ID
    WHERE
        A.Nome = @NomeAttore AND
		A.Cognome = @CognomeAttore;
END;