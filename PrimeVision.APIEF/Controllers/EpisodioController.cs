using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PrimeVision.APIEF.Models;

namespace PrimeVision.APIEF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EpisodioController : ControllerBase
    {
        private readonly PrimeVisionContext _context;

        public EpisodioController(PrimeVisionContext context)
        {
            _context = context;
        }

        // GET: api/Episodio
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TEpisodio>>> GetTEpisodios()
        {
            return await _context.TEpisodios.ToListAsync();
        }

        // GET: api/Episodio/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TEpisodio>> GetTEpisodio(int id)
        {
            var tEpisodio = await _context.TEpisodios.FindAsync(id);

            if (tEpisodio == null)
            {
                return NotFound();
            }

            return tEpisodio;
        }

        // PUT: api/Episodio/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTEpisodio(int id, TEpisodio tEpisodio)
        {
            if (id != tEpisodio.Id)
            {
                return BadRequest();
            }

            _context.Entry(tEpisodio).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TEpisodioExists(id))
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

        // POST: api/Episodio
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TEpisodio>> PostTEpisodio(TEpisodio tEpisodio)
        {
            _context.TEpisodios.Add(tEpisodio);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTEpisodio", new { id = tEpisodio.Id }, tEpisodio);
        }

        // DELETE: api/Episodio/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTEpisodio(int id)
        {
            var tEpisodio = await _context.TEpisodios.FindAsync(id);
            if (tEpisodio == null)
            {
                return NotFound();
            }

            _context.TEpisodios.Remove(tEpisodio);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TEpisodioExists(int id)
        {
            return _context.TEpisodios.Any(e => e.Id == id);
        }
    }
}
