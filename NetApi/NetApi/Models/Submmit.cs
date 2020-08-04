using Microsoft.VisualBasic.CompilerServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace NetApi.Models
{
    public class Submmit
    {
		[Key]
		public int Form_no { get; set; }
		[Required]
		public string Fname { get; set; }
		[Required]
		public string Lname { get; set; }
		[Required]
		public DateTime  Dob { get; set; }
		[Required]
		public string Salary { get; set; }
		[Required]
		public string CC_Type { get; set; }

		
	}
}
