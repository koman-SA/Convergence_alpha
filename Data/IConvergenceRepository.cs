using System.Collections.Generic;
using Convergence.Data.Entities;


namespace Convergence.Data
{
    public interface IConvergenceRepository
    {

        IEnumerable<Device> GetAllDevices();
        IEnumerable<Device> GetDevicesByType(string type);
        bool SaveAll();


    }
}