CREATE PROCEDURE GetSerieByTitle
    @SerieTitle NVARCHAR(100)
AS
BEGIN
    SELECT
        S.Titolo AS 'Titolo Serie TV',
        S.Stagioni AS 'Numero di Stagioni',
        S.DataUscita AS 'Data di Uscita',
        G.Nome AS 'Genere'
    FROM
        T_Serie S
    INNER JOIN
        T_Genere G ON S.GenereID = G.ID
    WHERE
        S.Titolo = @SerieTitle;
END;