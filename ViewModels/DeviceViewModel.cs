using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Convergence.ViewModels
{
    public class DeviceViewModel
    {
    public int OrderId { get; set; }
    public string Name { get; set; }
    [Required]
    [MinLength(4)]
    public string Type { get; set; }

    public ICollection<DeviceViewModel> Items { get; set; }
  }
}
