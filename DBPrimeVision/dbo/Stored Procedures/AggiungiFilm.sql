
CREATE PROCEDURE AggiungiFilm

    @Titolo nvarchar(100),
    @Durata int,
    @DataUscita date,
    @IsVietato bit,
    @IsPremiato bit,
    @GenereID int
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Film] (Titolo, Durata, DataUscita, IsVietato, IsPremiato, GenereID)
    VALUES (@Titolo, @Durata, @DataUscita, @IsVietato, @IsPremiato, @GenereID);
END