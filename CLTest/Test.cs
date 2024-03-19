using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CLTest
{
    public  class Test
    {
        static void Main(string[] args)
        {
            // Connessione al database
            string connectionString = "Data Source=DESKTOP-QSKLA7L;Initial Catalog=PrimeVision;Integrated Security=True;TrustServerCertificate=Yes;MultipleActiveResultSets=true";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                // Apertura della connessione
                connection.Open();

                // Creazione del comando per eseguire la stored procedure
                using (SqlCommand command = new SqlCommand("AggiungiAttore", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;

                    // Aggiunta dei parametri della stored procedure
                    command.Parameters.AddWithValue("@Nome", "John");
                    command.Parameters.AddWithValue("@Cognome", "Doe");
                    command.Parameters.AddWithValue("@Nazionalita", "USA");
                    command.Parameters.AddWithValue("@DataDiNascita", new DateTime(1980, 1, 1));
                    command.Parameters.AddWithValue("@IsPremiato", true);

                    // Esecuzione del comando
                    int rowsAffected = command.ExecuteNonQuery();
                    Console.WriteLine($"Numero di righe modificate: {rowsAffected}");
                }
            }
        }
    }
}
