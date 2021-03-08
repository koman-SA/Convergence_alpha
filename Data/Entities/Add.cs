using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Convergence.Data.Entities
{
    public class Add
    {
        public int Id { get; set; }
        public DateTime DateAdded { get; set; }
        public String UniqueID { get; set; }
        public ICollection<AddItem> Items { get; set; }
    }
}
