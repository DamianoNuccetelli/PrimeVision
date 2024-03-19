CREATE PROCEDURE [GetFilmByGenere]
    @GenreName NVARCHAR(100)
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
        T_Genere G ON F.GenereID = G.ID
    WHERE
        G.Nome = @GenreName;
END;