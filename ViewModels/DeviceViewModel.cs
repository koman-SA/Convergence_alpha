using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Convergence.ViewModels
{
    public class DeviceViewModel
    {
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }

     [Required]
     public string Type { get; set; }

    public ICollection<DeviceViewModel> Items { get; set; }
    }
}
