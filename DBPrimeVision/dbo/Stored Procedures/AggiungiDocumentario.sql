
CREATE PROCEDURE AggiungiDocumentario
    @Titolo nvarchar(100),
    @Durata int,
    @DataUscita date,
    @GenereID int
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Documentario] (Titolo, Durata, DataUscita, GenereID)
    VALUES (@Titolo, @Durata, @DataUscita, @GenereID);
END