
CREATE PROCEDURE AggiungiRegista

    @Nome nvarchar(100),
    @Cognome nvarchar(100),
    @DataDiNascita date,
    @Nazionalita nchar(3),
    @NumeroOscar int
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Regista] (Nome, Cognome, DataDiNascita, Nazionalita, NumeroOscar)
    VALUES (@Nome, @Cognome, @DataDiNascita, @Nazionalita, @NumeroOscar);
END