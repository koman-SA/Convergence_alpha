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
    public class ConvergenceContext : ApiAuthorizationDbContext<ApplicationUser>
    {

        public ConvergenceContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {

        }

        public DbSet<Device> Devices { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

       
    }
}
