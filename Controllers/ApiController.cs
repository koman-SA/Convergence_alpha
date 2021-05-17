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
    public class ApiController : Controller
    {
     
        private readonly ILogger<ApiController> _logger;
        private readonly ConvergenceContext _ctx;

        public ApiController(ILogger<ApiController> logger, ConvergenceContext ctx)
        {
            _logger = logger;
            _ctx = ctx;

        }
       
    
        public IActionResult Test()
        {
           
            return "Hello world";

        }
        
    }
}
