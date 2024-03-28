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
    public class RegistaController : ControllerBase
    {
        private readonly PrimeVisionContext _context;

        public RegistaController(PrimeVisionContext context)
        {
            _context = context;
        }

        // GET: api/Regista
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TRegistum>>> GetTRegista()
        {
            return await _context.TRegista.ToListAsync();
        }

        // GET: api/Regista/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TRegistum>> GetTRegistum(int id)
        {
            var tRegistum = await _context.TRegista.FindAsync(id);

            if (tRegistum == null)
            {
                return NotFound();
            }

            return tRegistum;
        }

        // PUT: api/Regista/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTRegistum(int id, TRegistum tRegistum)
        {
            if (id != tRegistum.Id)
            {
                return BadRequest();
            }

            _context.Entry(tRegistum).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TRegistumExists(id))
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

        // POST: api/Regista
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TRegistum>> PostTRegistum(TRegistum tRegistum)
        {
            _context.TRegista.Add(tRegistum);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTRegistum", new { id = tRegistum.Id }, tRegistum);
        }

        // DELETE: api/Regista/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTRegistum(int id)
        {
            var tRegistum = await _context.TRegista.FindAsync(id);
            if (tRegistum == null)
            {
                return NotFound();
            }

            _context.TRegista.Remove(tRegistum);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TRegistumExists(int id)
        {
            return _context.TRegista.Any(e => e.Id == id);
        }
    }
}
