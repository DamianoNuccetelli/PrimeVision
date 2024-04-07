using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CLCommon.Models;
using PrimeVision.APIEF.Data;

namespace PrimeVision.APIEF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StagioneController : ControllerBase
    {
        private readonly PrimeVisionContext _context;

        public StagioneController(PrimeVisionContext context)
        {
            _context = context;
        }

        // GET: api/Stagione
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TStagione>>> GetTStagione()
        {
            return await _context.TStagiones.ToListAsync();
        }

        // GET: api/Stagione/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TStagione>> GetTStagione(int id)
        {
            var tStagione = await _context.TStagiones.FindAsync(id);

            if (tStagione == null)
            {
                return NotFound();
            }

            return tStagione;
        }

        // PUT: api/Stagione/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTStagione(int id, TStagione tStagione)
        {
            if (id != tStagione.Id)
            {
                return BadRequest();
            }

            _context.Entry(tStagione).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TStagioneExists(id))
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

        // POST: api/Stagione
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TStagione>> PostTStagione(TStagione tStagione)
        {
            _context.TStagiones.Add(tStagione);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTStagione", new { id = tStagione.Id }, tStagione);
        }

        // DELETE: api/Stagione/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTStagione(int id)
        {
            var tStagione = await _context.TStagiones.FindAsync(id);
            if (tStagione == null)
            {
                return NotFound();
            }

            _context.TStagiones.Remove(tStagione);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TStagioneExists(int id)
        {
            return _context.TStagiones.Any(e => e.Id == id);
        }
    }
}
