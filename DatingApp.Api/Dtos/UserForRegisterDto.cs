using System.ComponentModel.DataAnnotations;

namespace DatingApp.Api.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        [StringLength(12, MinimumLength=8, ErrorMessage="You must specify password between 8 and 12")]
        public string Password { get; set; }
    }
}