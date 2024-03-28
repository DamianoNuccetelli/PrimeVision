using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CLCommon.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace PrimeVision.APIEF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SerieController : ControllerBase
    {
        private readonly PrimeVisionContext _context;

        public SerieController(PrimeVisionContext context)
        {
            _context = context;
        }

        // GET: api/Serie
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TSerie>>> GetTSeries()
        {
            return await _context.TSeries.ToListAsync();
        }

        // GET: api/Serie/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TSerie>> GetTSerie(int id)
        {
            var tSerie = await _context.TSeries.FindAsync(id);

            if (tSerie == null)
            {
                return NotFound();
            }

            return tSerie;
        }

        // PUT: api/Serie/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTSerie(int id, TSerie tSerie)
        {
            if (id != tSerie.Id)
            {
                return BadRequest();
            }

            _context.Entry(tSerie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TSerieExists(id))
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

        // POST: api/Serie
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TSerie>> PostTSerie(TSerie tSerie)
        {
            _context.TSeries.Add(tSerie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTSerie", new { id = tSerie.Id }, tSerie);
        }

        // DELETE: api/Serie/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTSerie(int id)
        {
            var tSerie = await _context.TSeries.FindAsync(id);
            if (tSerie == null)
            {
                return NotFound();
            }

            _context.TSeries.Remove(tSerie);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TSerieExists(int id)
        {
            return _context.TSeries.Any(e => e.Id == id);
        }
    }
}
