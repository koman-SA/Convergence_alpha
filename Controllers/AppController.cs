using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;

using Convergence.Data;

using Convergence.Services;

using Convergence.ViewModels;


namespace Convergence.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class AppController : Controller
    {
     
        private readonly ILogger<AppController> _logger;
        private readonly ConvergenceContext _ctx;

        public AppController(ILogger<AppController> logger, ConvergenceContext ctx)
        {
            _logger = logger;
            _ctx = ctx;

        }
       
    
        public IActionResult Index()
        {
            var results = _ctx.Devices.ToList();
            
            return View();

        }
        
    }
}
