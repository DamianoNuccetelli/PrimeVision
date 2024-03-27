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
    public class ProfiloController : ControllerBase
    {
        private readonly PrimeVisionContext _context;

        public ProfiloController(PrimeVisionContext context)
        {
            _context = context;
        }

        // GET: api/Profilo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TProfilo>>> GetTProfilos()
        {
            return await _context.TProfilos.ToListAsync();
        }

        // GET: api/Profilo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TProfilo>> GetTProfilo(int id)
        {
            var tProfilo = await _context.TProfilos.FindAsync(id);

            if (tProfilo == null)
            {
                return NotFound();
            }

            return tProfilo;
        }

        // PUT: api/Profilo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTProfilo(int id, TProfilo tProfilo)
        {
            if (id != tProfilo.Id)
            {
                return BadRequest();
            }

            _context.Entry(tProfilo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TProfiloExists(id))
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

        // POST: api/Profilo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TProfilo>> PostTProfilo(TProfilo tProfilo)
        {
            _context.TProfilos.Add(tProfilo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTProfilo", new { id = tProfilo.Id }, tProfilo);
        }

        // DELETE: api/Profilo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTProfilo(int id)
        {
            var tProfilo = await _context.TProfilos.FindAsync(id);
            if (tProfilo == null)
            {
                return NotFound();
            }

            _context.TProfilos.Remove(tProfilo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TProfiloExists(int id)
        {
            return _context.TProfilos.Any(e => e.Id == id);
        }
    }
}
