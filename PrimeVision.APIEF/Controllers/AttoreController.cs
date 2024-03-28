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
    public class AttoreController : ControllerBase
    {
        private readonly PrimeVisionContext _context;

        public AttoreController(PrimeVisionContext context)
        {
            _context = context;
        }

        // GET: api/Attore
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TAttore>>> GetTAttores()
        {
            return await _context.TAttores.ToListAsync();
        }

        // GET: api/Attore/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TAttore>> GetTAttore(int id)
        {
            var tAttore = await _context.TAttores.FindAsync(id);

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
                await _context.SaveChangesAsync();
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
            _context.TAttores.Add(tAttore);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTAttore", new { id = tAttore.Id }, tAttore);
        }

        // DELETE: api/Attore/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTAttore(int id)
        {
            var tAttore = await _context.TAttores.FindAsync(id);
            if (tAttore == null)
            {
                return NotFound();
            }

            _context.TAttores.Remove(tAttore);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TAttoreExists(int id)
        {
            return _context.TAttores.Any(e => e.Id == id);
        }
    }
}
