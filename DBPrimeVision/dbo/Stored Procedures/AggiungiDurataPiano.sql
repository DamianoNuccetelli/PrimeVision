
CREATE PROCEDURE AggiungiDurataPiano
    @DataInizio date,
    @DataFine date
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_DurataPiano] (DataInizio, DataFine)
    VALUES (@DataInizio, @DataFine);
END