using System;
using System.Threading.Tasks;
using PrimeVision.API.Models;

namespace PrimeVision.API.DataAccess
{
    public class DataAccessLayer
    {
        private readonly IPrimeVisionContextProcedures _procedures;

        public DataAccessLayer(IPrimeVisionContextProcedures procedures)
        {
            _procedures = procedures;
        }

        public async Task EseguiAggiungiAttoreAsync(string nome, string cognome, string nazionalita, DateTime? dataDiNascita, bool? isPremiato)
        {
            // Chiamata alla stored procedure AggiungiAttoreAsync
            var result = await _procedures.AggiungiAttoreAsync(nome, cognome, nazionalita, dataDiNascita, isPremiato);
            
        }
    }
}
