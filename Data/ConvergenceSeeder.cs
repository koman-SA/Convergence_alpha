﻿using Convergence.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Convergence.Data
{
    public class ConvergenceSeeder
    {
        private readonly ConvergenceContext _ctx;
        private readonly IWebHostEnvironment _hosting;
        public ConvergenceSeeder(ConvergenceContext ctx, IWebHostEnvironment hosting)
        {
            _ctx = ctx;
            _hosting = hosting;
        }
        public void Seed()
        {
            _ctx.Database.EnsureCreated();

            if (!_ctx.Devices.Any())
            {
                //Need to create sample data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/art.json");
                var json = File.ReadAllText(filepath);
                var devices = JsonConvert.DeserializeObject<IEnumerable<Device>>(json);
                var problems = devices.Where(x => x.Id == null).ToList();
                _ctx.Devices.AddRange(devices);


                _ctx.SaveChanges();
            }
        }
    }
}
