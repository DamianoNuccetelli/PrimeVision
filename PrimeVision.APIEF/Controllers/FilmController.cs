using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CLCommon.Models;
using CLBusinessLayer;
using Microsoft.AspNetCore.Cors;
using CLSerilog;

namespace PrimeVision.APIEF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors(PolicyName = "enablecorsPrimeVision")]
    public class FilmController : ControllerBase
    {
        private readonly PrimeVisionContext _context;
        private readonly ILogger<FilmController> _logger;
        private ManageBL oBL = null;

        public FilmController(PrimeVisionContext context, ILogger<FilmController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Film
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TFilm>>> GetTFilms()
        {
            List<TFilm> listFilm = null;
            try
            {
                oBL = new ManageBL(_context);
                listFilm = await oBL.GetAllFilms();
            }
            catch (Exception ex)
            {
                string errorMessage = GetLogMessage.LogError("Utente", "Namespace", ex);
                _logger.LogError(errorMessage);
            }
            return listFilm;
        }

        // GET: api/Film/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TFilm>> GetTFilm(int id)
        {
            //var tFilm = await _context.TFilms.FindAsync(id);
            TFilm oFilm = null;

            try
            {
                oBL = new ManageBL(_context);
                oFilm = await oBL.GetDetailsFilm(id);
            }
            catch (Exception ex)
            {
                string errorMessage = GetLogMessage.LogError("Utente", "Namespace", ex);
                _logger.LogError(errorMessage);
            }


            if (oFilm == null)
            {
                return NotFound();
            }

            return oFilm;
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

            //_context.Entry(tFilm).State = EntityState.Modified;


            try
            {
                oBL = new ManageBL(_context);
                await oBL.UpdateFilm(tFilm);

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
            try
            {
                oBL = new ManageBL(_context);
                await oBL.AddFilm(tFilm);
            }
            catch (Exception ex)
            {
                string errorMessage = GetLogMessage.LogError("Utente", "Namespace", ex);
                _logger.LogError(errorMessage);
            }


            return CreatedAtAction("GetTFilm", new { id = tFilm.Id }, tFilm);
        }

        // DELETE: api/Film/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTFilm(int id)
        {
            
            if (id == 0)
            {
                return NotFound();
            }

            try
            {
                oBL = new ManageBL(_context);
                await oBL.DeleteFilm(id);
            }
            catch (Exception ex)
            {
                string errorMessage = GetLogMessage.LogError("Utente", "Namespace", ex);
                _logger.LogError(errorMessage);
            }

            return NoContent();
        }

        private bool TFilmExists(int id)
        {
            return _context.TFilms.Any(e => e.Id == id);
        }
    }
}
