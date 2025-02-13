using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GestaoDePlanosTelefonicos.Data;

namespace GestaoDePlanosTelefonicos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientePlanoController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientePlanoController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ClientePlano
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientePlano>>> GetClientePlanos()
        {
            return await _context.ClientePlanos.ToListAsync();
        }

        // GET: api/ClientePlano/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClientePlano>> GetClientePlano(Guid id)
        {
            var clientePlano = await _context.ClientePlanos.FindAsync(id);

            if (clientePlano == null)
            {
                return NotFound();
            }

            return clientePlano;
        }

        // PUT: api/ClientePlano/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClientePlano(Guid id, ClientePlano clientePlano)
        {
            if (id != clientePlano.Id)
            {
                return BadRequest();
            }

            _context.Entry(clientePlano).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientePlanoExists(id))
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

        // POST: api/ClientePlano
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ClientePlano>> PostClientePlano(ClientePlano clientePlano)
        {
            _context.ClientePlanos.Add(clientePlano);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClientePlano", new { id = clientePlano.Id }, clientePlano);
        }

        // DELETE: api/ClientePlano/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClientePlano(Guid id)
        {
            var clientePlano = await _context.ClientePlanos.FindAsync(id);
            if (clientePlano == null)
            {
                return NotFound();
            }

            _context.ClientePlanos.Remove(clientePlano);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClientePlanoExists(Guid id)
        {
            return _context.ClientePlanos.Any(e => e.Id == id);
        }
    }
}
