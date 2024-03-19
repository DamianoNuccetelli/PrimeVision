CREATE PROCEDURE [dbo].[GetSerieByRegista]
    @NomeRegista NVARCHAR(100),
    @CognomeRegista NVARCHAR(100)
AS
BEGIN
    SELECT
        S.Titolo AS 'Titolo del Serie',
        S.Stagioni AS 'Stagioni',
        S.DataUscita AS 'Data di Uscita',
        G.Nome AS 'Genere'
    FROM
        T_Serie S
    INNER JOIN
        T_RelRegistaOpera RRO ON S.ID = RRO.SerieID
    INNER JOIN
        T_Regista R ON RRO.RegistaID = R.ID
    INNER JOIN
        T_Genere G ON S.GenereID = G.ID
    WHERE
        R.Nome = @NomeRegista AND
        R.Cognome = @CognomeRegista;
END;