CREATE PROCEDURE [dbo].[GetDocumentarioByGenere]
    @GenreName NVARCHAR(100)
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
        T_Genere G ON D.GenereID = G.ID
    WHERE
        G.Nome = @GenreName;
END;