using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CLCommon.Repository
{
    public interface IRepositoryAsync<T>
    {
        Task<IEnumerable<T>> GetAllAsync();
        //TODO Implementare un metodo per la ricerca (filtro dei dati)
        Task<T> GetDetailsAsync(int id);
        Task<T> AddAsync(T entity);
        Task<Boolean> UpdateAsync(T entity);
        Task<Boolean> DeleteAsync(int id);

    }

    public interface IRepositorySyncronous<T>
    {
        IEnumerable<T> GetAll();
        T GetById(int id);
        void Add(T entity);
        void Update(T entity);
        void Delete(int id);
    }
}
