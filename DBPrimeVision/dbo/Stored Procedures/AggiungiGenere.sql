
CREATE PROCEDURE AggiungiGenere
    @Nome nvarchar(100),
    @Descrizione nvarchar(300),
    @IsPopolare bit
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Genere] (Nome, Descrizione, IsPopolare)
    VALUES (@Nome, @Descrizione, @IsPopolare);
END