using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NetApi.Models;

namespace NetApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Microsoft.AspNetCore.Cors.EnableCors("AllowOrigin")]
    public class SubmmitsController : ControllerBase
    {
        private readonly CoreDbContext _context;

        public SubmmitsController(CoreDbContext context)
        {
            _context = context;
        }

        // GET: api/Submmits
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Submmit>>> GetSubmmit()
        {
            return await _context.Submmit.ToListAsync();
        }

        // GET: api/Submmits/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Submmit>> GetSubmmit(int id)
        {
            var submmit = await _context.Submmit.FindAsync(id);

            if (submmit == null)
            {
                return NotFound();
            }

            return submmit;
        }

        // PUT: api/Submmits/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubmmit(int id, Submmit submmit)
        {
            if (id != submmit.Form_no)
            {
                return BadRequest();
            }

            _context.Entry(submmit).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubmmitExists(id))
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

        // POST: api/Submmits
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Submmit>> PostSubmmit(Submmit submmit)
        {
            _context.Submmit.Add(submmit);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSubmmit", new { id = submmit.Form_no }, submmit);
        }

        // DELETE: api/Submmits/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Submmit>> DeleteSubmmit(int id)
        {
            var submmit = await _context.Submmit.FindAsync(id);
            if (submmit == null)
            {
                return NotFound();
            }

            _context.Submmit.Remove(submmit);
            await _context.SaveChangesAsync();

            return submmit;
        }

        private bool SubmmitExists(int id)
        {
            return _context.Submmit.Any(e => e.Form_no == id);
        }
    }
}
