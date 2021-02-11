﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Convergence.Services;
using Convergence.ViewModels;
using Convergence.Data;

namespace Convergence.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class AppController : Controller
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        
        private readonly IMailService _mailService;
        private readonly ConvergenceContext _ctx;

        public AppController(IMailService mailService, ConvergenceContext ctx)
        {
            _mailService = mailService;
            _ctx = ctx;
        }
        public IActionResult Index()
        {
            var results = _ctx.Devices.ToList();
                return View();

        }
        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
