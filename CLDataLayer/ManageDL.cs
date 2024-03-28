using CLCommon.Models;
using Microsoft.EntityFrameworkCore;

namespace CLDataLayer
{
    public class ManageDL
    {
        //private readonly PrimeVisionContext _context;

        //public ManageDL(PrimeVisionContext context)
        //{
        //    _context = context;
        //}

        //public async Task<List<TFilm>> GetAllFilms()
        //{
        //    List<TFilm> listFilm = null;

        //    listFilm = await _context.TFilms.ToListAsync();


        //    return listFilm;
        //}

        //public async Task<TFilm> GetDetailsFilm(int id)
        //{
        //    TFilm oFilm = null;

        //    oFilm = await _context.TFilms.FindAsync(id);


        //    return oFilm;
        //}

        //public async Task<int> AddFilm(TFilm oFilm)
        //{
        //    int iRet = 0;

        //    _context.TFilms.Add(oFilm);
        //    iRet = await _context.SaveChangesAsync();


        //    return iRet;
        //}

        //public async Task<int> UpdateFilm(TFilm oFilm)
        //{
        //    int iRet = 0;

        //    _context.Entry(oFilm).State = EntityState.Modified;
        //    iRet = await _context.SaveChangesAsync();


        //    return iRet;
        //}

        //public async Task<int> DeleteFilm(int id)
        //{
        //    int iRet = 0;

        //    var oFilm = await _context.TFilms.FindAsync(id);
        //    if (oFilm == null)
        //    {
        //        return iRet;
        //    }

        //    _context.TFilms.Remove(oFilm);
        //    iRet = await _context.SaveChangesAsync();

        //    return iRet;
        //}

        private readonly PrimeVisionContext _context;

        public ManageDL(PrimeVisionContext context)
        {
            _context = context;
        }

        public async Task<List<T>> GetAll<T>() where T : class
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<T> GetDetails<T>(int id) where T : class
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task<int> Add<T>(T entity) where T : class
        {
            _context.Set<T>().Add(entity);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Update<T>(T entity) where T : class
        {
            _context.Entry(entity).State = EntityState.Modified;
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Delete<T>(int id) where T : class
        {
            var entity = await _context.Set<T>().FindAsync(id);
            if (entity == null)
            {
                throw new ArgumentException($"Entity of type {typeof(T).Name} with ID {id} non trovata.");
            }
            _context.Set<T>().Remove(entity);
            return await _context.SaveChangesAsync();
        }

    }
}
