
CREATE PROCEDURE AggiungiSerie
    @Titolo nvarchar(100),
    @Stagioni int,
    @DataUscita date,
    @IsVietato bit,
    @IsPremiato bit,
    @GenereID int
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Serie] (Titolo, Stagioni, DataUscita, IsVietato, IsPremiato, GenereID)
    VALUES (@Titolo, @Stagioni, @DataUscita, @IsVietato, @IsPremiato, @GenereID);
END