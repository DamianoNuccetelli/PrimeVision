using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CLCommon.Models;

namespace PrimeVision.APIEF.Data
{
    public class PrimeVisionAPIEFContext : DbContext
    {
        public PrimeVisionAPIEFContext (DbContextOptions<PrimeVisionAPIEFContext> options)
            : base(options)
        {
        }

        public DbSet<CLCommon.Models.TStagione> TStagione { get; set; } = default!;
    }
}
