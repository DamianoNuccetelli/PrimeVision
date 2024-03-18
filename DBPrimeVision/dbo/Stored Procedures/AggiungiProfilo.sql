
CREATE PROCEDURE [dbo].[AggiungiProfilo]
    @Nickname nvarchar(100),
    @FotoProfilo image,
    @UtenteID int
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Profilo] (Nickname, FotoProfilo, UtenteID)
    VALUES (@Nickname, @FotoProfilo, @UtenteID);
END