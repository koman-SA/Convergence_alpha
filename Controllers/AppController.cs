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

        private readonly IConvergenceRepository _repository;
       

        public AppController(IConvergenceRepository repository)
        {
            _repository = repository;
        }
        public IActionResult Index()
        {

            return View();

        }
        public IActionResult CompanyDevices()
        {
            var results = _repository.GetAllDevices();
            return View(results);

        }

    }
}
