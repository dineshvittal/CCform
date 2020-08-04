using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NetApi.Models;

namespace NetApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class typesController : ControllerBase
    {
        private readonly CoreDbContext _context;

        public typesController(CoreDbContext context)
        {
            _context = context;
        }

        // GET: api/types
        [HttpGet]
        public  IEnumerable<string> Getform()
        {
            List<string> list1= new List<string>();
            foreach (type t in _context.types)
            {
                list1.Add(t.cc_name.ToString());
            }

            return  list1;
            

        }



        // GET: api/types/5
        [HttpGet("{id}")]
        public async Task<ActionResult<type>> Gettype(int id)
        {
            var @type = await _context.types.FindAsync(id);

            if (@type == null)
            {
                return NotFound();
            }

            return @type;
        }

        // PUT: api/types/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Puttype(int id, type @type)
        {
            if (id != @type.cc_no)
            {
                return BadRequest();
            }

            _context.Entry(@type).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!typeExists(id))
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

        // POST: api/types
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<type>> Posttype(type @type)
        {
            _context.types.Add(@type);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Gettype", new { id = @type.cc_no }, @type);
        }

        // DELETE: api/types/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<type>> Deletetype(int id)
        {
            var @type = await _context.types.FindAsync(id);
            if (@type == null)
            {
                return NotFound();
            }

            _context.types.Remove(@type);
            await _context.SaveChangesAsync();

            return @type;
        }

        private bool typeExists(int id)
        {
            return _context.types.Any(e => e.cc_no == id);
        }
    }
}
