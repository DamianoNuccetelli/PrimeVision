
CREATE PROCEDURE [dbo].[AggiungiAttore]

	@Nome nvarchar(100),
	@Cognome nvarchar(100),
	@Nazionalita nchar(3),
	@DataDiNascita date,
	@IsPremiato bit
AS
BEGIN
	SET NOCOUNT ON;


    INSERT INTO [dbo].[T_Attore] (Nome, Cognome, Nazionalita, DataDiNascita, IsPremiato)
    VALUES (@Nome, @Cognome, @Nazionalita, @DataDiNascita, @IsPremiato);
END