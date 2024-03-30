using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CLCommon.Models;
using CLCommon.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace PrimeVision.APIEF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttoreController : ControllerBase
    {
        private readonly PrimeVisionContext _context;
        private readonly IRepositoryAsync<TAttore> _attoreRepAsync;
        private EntityFrameworkRepositoryAsync<TAttore> _attoreRep;
        private readonly DbContextOptions<PrimeVisionContext> _contextOptions;
        public AttoreController(PrimeVisionContext context, IRepositoryAsync<TAttore> attoreRepAsync, DbContextOptions<PrimeVisionContext> contextOptions)
        {
            _context = context;
            _attoreRepAsync = attoreRepAsync;
            _contextOptions = contextOptions;
        }

        // GET: api/Attore
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TAttore>>> GetTAttores()
        {
            _attoreRep = new EntityFrameworkRepositoryAsync<TAttore>(_contextOptions);

            List<TAttore> listaAttori = (List<TAttore>)await _attoreRep.GetAllAsync();

            return listaAttori;

            //return await _context.TAttores.ToListAsync();
        }

        // GET: api/Attore/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TAttore>> GetTAttore(int id)
        {
            //var tAttore = await _context.TAttores.FindAsync(id);

           _attoreRep = new EntityFrameworkRepositoryAsync<TAttore>(_contextOptions);

           TAttore tAttore = await _attoreRep.GetDetailsAsync(id);

            if (tAttore == null)
            {
                return NotFound();
            }

            return tAttore;
        }

        // PUT: api/Attore/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTAttore(int id, TAttore tAttore)
        {
            if (id != tAttore.Id)
            {
                return BadRequest();
            }

            _context.Entry(tAttore).State = EntityState.Modified;

            try
            {
               // await _context.SaveChangesAsync();
               _attoreRep = new EntityFrameworkRepositoryAsync<TAttore>(_contextOptions);
               await _attoreRep.UpdateAsync(tAttore);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TAttoreExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Attore
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TAttore>> PostTAttore(TAttore tAttore)
        {
            _attoreRep = new EntityFrameworkRepositoryAsync<TAttore>(_contextOptions);
            await _attoreRep.AddAsync(tAttore);
            return CreatedAtAction("GetTAttore", new { id = tAttore.Id }, tAttore);
        }


        // GABRIELE TODO SISTEMARE IL METODO (inutile/inutilizzato)
        [HttpGet("GetListaAttori")]
        public async Task<ActionResult<IEnumerable<TAttore>>> PostListaAttori()
        {
            var listaAttori = await _context.TAttores.ToListAsync();
            return listaAttori;
        }
        //FINE METODO ***********************

        // DELETE: api/Attore/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTAttore(int id)
        {
            //var tAttore = await _context.TAttores.FindAsync(id);
            _attoreRep = new EntityFrameworkRepositoryAsync<TAttore>(_contextOptions);
           TAttore tAttore = await _attoreRep.GetDetailsAsync(id);

            if (tAttore == null)
            {
                return NotFound();
            }

            await _attoreRep.DeleteAsync(id);

            return NoContent();
        }

        private bool TAttoreExists(int id)
        {
            return _context.TAttores.Any(e => e.Id == id);
        }
    }
}
