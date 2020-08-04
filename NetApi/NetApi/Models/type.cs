using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace NetApi.Models
{
    public class type
    {
        [Key]
        public int cc_no { get; set; }
        [Required]
        public string cc_name { get; set; }
    }
}
