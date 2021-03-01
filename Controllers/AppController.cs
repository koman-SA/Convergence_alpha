using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Convergence.Data;


namespace Convergence.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class AppController : Controller
    {
     
        private readonly ILogger<AppController> _logger;

        public AppController(ILogger<AppController> logger)
        {
            _logger = logger;
        }
       
        
        private readonly ConvergenceContext _ctx;

        public AppController(ConvergenceContext ctx)
        {
            _ctx = ctx;
        }
        public IActionResult Index()
        {
            var results = _ctx.Devices.ToList();
            return View();

        }
        
    }
}
