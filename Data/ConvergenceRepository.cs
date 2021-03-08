using Convergence.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Convergence.Data
{
    public class ConvergenceRepository : IConvergenceRepository
    {
        private readonly ConvergenceContext _ctx;

        public ConvergenceRepository(ConvergenceContext ctx)
        {
            _ctx = ctx;
        }

        public IEnumerable<Device>GetAllDevices()
        {
            return _ctx.Devices
                .OrderBy(d => d.Name)
                .ToList();
        }
        public IEnumerable<Device> GetDevicesByType(string type)
        {
            return _ctx.Devices
                .Where(d => d.Type == type)
                .ToList();
        }

        public bool SaveAll()
        {
           return _ctx.SaveChanges() > 0;
        }
       
    }

}
