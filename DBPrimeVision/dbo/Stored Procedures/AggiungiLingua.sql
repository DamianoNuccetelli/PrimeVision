
CREATE PROCEDURE AggiungiLingua
    @Nome nvarchar(50)
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Lingua] (Nome)
    VALUES (@Nome);
END