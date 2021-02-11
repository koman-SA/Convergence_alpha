using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Convergence.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Options;
using Convergence.Data.Entities;

namespace Convergence.Data
{
    public class ConvergenceContext : DbContext
    {

        public ConvergenceContext(DbContextOptions<ConvergenceContext> options): base(options)
        {
        }

        public DbSet<Device> Devices { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Device>()
                .HasData(new Device()
                {
                    Id = 1,
                    Name = "Test",
                    Type = "Desktop"
                });
        }

    }
}
