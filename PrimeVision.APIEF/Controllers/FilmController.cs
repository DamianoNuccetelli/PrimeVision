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
    public class FilmController : ControllerBase
    {
        private readonly PrimeVisionContext _context;

        public FilmController(PrimeVisionContext context)
        {
            _context = context;
        }

        // GET: api/Film
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TFilm>>> GetTFilms()
        {
            return await _context.TFilms.ToListAsync();
        }

        // GET: api/Film/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TFilm>> GetTFilm(int id)
        {
            var tFilm = await _context.TFilms.FindAsync(id);

            if (tFilm == null)
            {
                return NotFound();
            }

            return tFilm;
        }

        // PUT: api/Film/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTFilm(int id, TFilm tFilm)
        {
            if (id != tFilm.Id)
            {
                return BadRequest();
            }

            _context.Entry(tFilm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TFilmExists(id))
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

        // POST: api/Film
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TFilm>> PostTFilm(TFilm tFilm)
        {
            _context.TFilms.Add(tFilm);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTFilm", new { id = tFilm.Id }, tFilm);
        }

        // DELETE: api/Film/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTFilm(int id)
        {
            var tFilm = await _context.TFilms.FindAsync(id);
            if (tFilm == null)
            {
                return NotFound();
            }

            _context.TFilms.Remove(tFilm);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TFilmExists(int id)
        {
            return _context.TFilms.Any(e => e.Id == id);
        }
    }
}
