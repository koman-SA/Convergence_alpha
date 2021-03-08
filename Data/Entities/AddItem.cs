using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Convergence.Data.Entities
{
    public class AddItem
    {
        public int Id { get; set; }
        public Device Device { get; set; }
        public String Type { get; set; }
        public bool Active { get; set; }
        public Add Add { get; set; }



    }
}
