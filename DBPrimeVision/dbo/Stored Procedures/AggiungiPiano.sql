
CREATE PROCEDURE AggiungiPiano
    @Nome nvarchar(100),
    @Descrizione nvarchar(300),
    @Costo decimal(10,2),
    @DurataPianoID int
AS
BEGIN
    SET NOCOUNT ON;
    INSERT INTO [dbo].[T_Piano] (Nome, Descrizione, Costo, DurataPianoID)
    VALUES (@Nome, @Descrizione, @Costo, @DurataPianoID);
END