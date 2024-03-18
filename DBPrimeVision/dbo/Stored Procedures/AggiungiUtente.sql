
CREATE PROCEDURE AggiungiUtente
    @Nome nvarchar(100),
    @Cognome nvarchar(100),
    @Indirizzo nvarchar(200),
    @Password nvarchar(16),
    @DataDiNascita date,
    @Email nvarchar(200),
    @Sesso nvarchar(5),
    @Nazionalita nchar(3),
    @PianoID int
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Utente] (Nome, Cognome, Indirizzo, Password, DataDiNascita, Email, Sesso, Nazionalita, PianoID)
    VALUES (@Nome, @Cognome, @Indirizzo, @Password, @DataDiNascita, @Email, @Sesso, @Nazionalita, @PianoID);
END