CREATE PROCEDURE [dbo].[SearchRecords]
    @NomeAttore NVARCHAR(100) = NULL,
    @TitoloFilm NVARCHAR(100) = NULL,
    @NomeRegista NVARCHAR(100) = NULL,
    @NomeGenere NVARCHAR(100) = NULL
AS
BEGIN
    SET NOCOUNT ON;

    SELECT 
        F.ID AS FilmID,
        F.Titolo AS TitoloFilm,
        A.Nome AS NomeAttore,
        A.Cognome AS CognomeAttore,
        R.Nome AS NomeRegista,
        R.Cognome AS CognomeRegista,
        G.Nome AS NomeGenere
    FROM 
        T_Film F
    INNER JOIN 
        T_Regista R ON F.ID = R.ID
    INNER JOIN 
        T_Genere G ON F.GenereID = G.ID
    LEFT JOIN 
         [dbo].[T_RelAttoreOpera] RA ON F.ID = RA.FilmID
    LEFT JOIN 
        T_Attore A ON RA.AttoreID = A.ID
    WHERE 
        (@TitoloFilm IS NULL OR F.Titolo LIKE @TitoloFilm + '%')
        AND (
            @NomeAttore IS NULL 
            OR 
            (
                A.Nome LIKE @NomeAttore + '%' 
                OR 
                A.Cognome LIKE @NomeAttore + '%' 
                OR 
                CONCAT(A.Nome, ' ', A.Cognome) LIKE @NomeAttore + '%'
                OR
                A.Nome LIKE @NomeAttore + '%' -- Aggiunta ricerca per il primo nome
            )
        )
        AND (@NomeRegista IS NULL OR (R.Nome LIKE @NomeRegista + '%' OR R.Cognome LIKE @NomeRegista + '%' OR CONCAT(R.Nome, ' ', R.Cognome) LIKE @NomeRegista + '%'))
        AND (@NomeGenere IS NULL OR G.Nome LIKE @NomeGenere + '%')
END