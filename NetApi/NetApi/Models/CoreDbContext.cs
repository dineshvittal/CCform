using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using NetApi.Models;

namespace NetApi.Models
{
    
    public class CoreDbContext : DbContext
    {
        public CoreDbContext(DbContextOptions<CoreDbContext> options) : base(options)
        {
                
        }

        public DbSet<type> types { get; set; }

        public DbSet<NetApi.Models.Submmit> Submmit { get; set; }
    }
}
