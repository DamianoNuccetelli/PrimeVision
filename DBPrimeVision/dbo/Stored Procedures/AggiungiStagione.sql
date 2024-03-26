
CREATE PROCEDURE AggiungiStagione
    @NumeroStagione int,
    @Descrizione nvarchar(300),
    @SerieID int
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Stagione] (NumeroStagione, Descrizione, SerieID)
    VALUES (@NumeroStagione, @Descrizione, @SerieID);
END