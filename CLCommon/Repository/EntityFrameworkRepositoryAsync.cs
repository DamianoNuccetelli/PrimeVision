using CLCommon.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CLCommon.Repository
{
   public class EntityFrameworkRepositoryAsync<T> : IRepositoryAsync<T> where T : class
   {

        private readonly DbContext _context;
        private readonly DbSet<T> _dbSet;

        public EntityFrameworkRepositoryAsync(DbContextOptions<PrimeVisionContext> options)
        {
            _context = new PrimeVisionContext(options);
            _dbSet = _context.Set<T>();
        }
        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<T> GetDetailsAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task<T> AddAsync(T entity)
        {
            _dbSet.Add(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task<Boolean> UpdateAsync(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<Boolean> DeleteAsync(int id)
        {
            var entity = await _dbSet.FindAsync(id);
            _dbSet.Remove(entity);
            await _context.SaveChangesAsync();
            return true;
        }


    }

}
