CREATE PROCEDURE GetFilmByActor
    @ActorName NVARCHAR(100),
	@CognomeAttore NVARCHAR(100)
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
        T_RelAttoreOpera RAO ON F.ID = RAO.FilmID
    INNER JOIN
        T_Attore A ON RAO.AttoreID = A.ID
    INNER JOIN
        T_Genere G ON F.GenereID = G.ID
    WHERE
        A.Nome = @ActorName AND
		A.Cognome = @CognomeAttore;
END;