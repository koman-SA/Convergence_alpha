using System;
using System.Collections.Generic;
using System.Linq;
using Convergence.Data;
using System.Text;
using System.Threading.Tasks;

namespace Convergence.Data.Entities
{
    public class Device
    {
        public int Id { get; set; }
        public int SiteId { get; set; }
        public String Username { get; set; } 
        public String Name { get; set; }
        public String Type { get; set; }
        public DateTime AddedDate { get; set; }
        public DateTime LastSeen { get; set; }
        


    }
}
