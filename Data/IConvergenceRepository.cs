using Convergence.Data.Entities;
using System.Collections.Generic;

namespace Convergence.Data
{
    public interface IConvergenceRepository
    {
        object Devices { get; }

        IEnumerable<Device> GetAllDevices();
        IEnumerable<Device> GetDevicesByType(string type);
        bool SaveChanges();
    }
}