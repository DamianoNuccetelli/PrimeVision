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
    public class GenereController : ControllerBase
    {
        private readonly PrimeVisionContext _context;

        public GenereController(PrimeVisionContext context)
        {
            _context = context;
        }

        // GET: api/Genere
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TGenere>>> GetTGeneres()
        {
            return await _context.TGeneres.ToListAsync();
        }

        // GET: api/Genere/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TGenere>> GetTGenere(int id)
        {
            var tGenere = await _context.TGeneres.FindAsync(id);

            if (tGenere == null)
            {
                return NotFound();
            }

            return tGenere;
        }

        // PUT: api/Genere/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTGenere(int id, TGenere tGenere)
        {
            if (id != tGenere.Id)
            {
                return BadRequest();
            }

            _context.Entry(tGenere).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TGenereExists(id))
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

        // POST: api/Genere
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TGenere>> PostTGenere(TGenere tGenere)
        {
            _context.TGeneres.Add(tGenere);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTGenere", new { id = tGenere.Id }, tGenere);
        }

        // DELETE: api/Genere/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTGenere(int id)
        {
            var tGenere = await _context.TGeneres.FindAsync(id);
            if (tGenere == null)
            {
                return NotFound();
            }

            _context.TGeneres.Remove(tGenere);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TGenereExists(int id)
        {
            return _context.TGeneres.Any(e => e.Id == id);
        }
    }
}
