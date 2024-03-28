using CLCommon.Models;
using Microsoft.EntityFrameworkCore;

namespace CLDataLayer
{
    public class ManageDL
    {
        private readonly PrimeVisionContext _context;

        public ManageDL(PrimeVisionContext context)
        {
            _context = context;
        }

        public async Task<List<TFilm>> GetAllFilms()
        {
            List<TFilm> listFilm = null;

            listFilm = await _context.TFilms.ToListAsync();


            return listFilm;
        }

        public async Task<TFilm> GetDetailsFilm(int id)
        {
            TFilm oFilm = null;

            oFilm = await _context.TFilms.FindAsync(id);


            return oFilm;
        }

        public async Task<int> AddFilm(TFilm oFilm)
        {
            int iRet = 0;

            _context.TFilms.Add(oFilm);
            iRet = await _context.SaveChangesAsync();


            return iRet;
        }

        public async Task<int> UpdateFilm(TFilm oFilm)
        {
            int iRet = 0;

            _context.Entry(oFilm).State = EntityState.Modified;
            iRet = await _context.SaveChangesAsync();


            return iRet;
        }

        public async Task<int> DeleteFilm(int id)
        {
            int iRet = 0;

            var oFilm = await _context.TFilms.FindAsync(id);
            if (oFilm == null)
            {
                return iRet;
            }

            _context.TFilms.Remove(oFilm);
            iRet = await _context.SaveChangesAsync();

            return iRet;
        }



    }
}
