CREATE PROCEDURE [dbo].[GetDocumentarioByRegista]
    @NomeRegista NVARCHAR(100),
    @CognomeRegista NVARCHAR(100)
AS
BEGIN
    SELECT
        D.Titolo AS 'Titolo del Documentario',
        D.Durata AS 'Durata',
        D.DataUscita AS 'Data di Uscita',
        G.Nome AS 'Genere'
    FROM
        T_Documentario D
    INNER JOIN
        T_RelRegistaOpera RRO ON D.ID = RRO.DocID
    INNER JOIN
        T_Regista R ON RRO.RegistaID = R.ID
    INNER JOIN
        T_Genere G ON D.GenereID = G.ID
    WHERE
        R.Nome = @NomeRegista AND
        R.Cognome = @CognomeRegista;
END;