using System.ComponentModel.DataAnnotations;

namespace APIWeeUsuarios.Models
{
    public class Usuario
    {
        public int Id { get; set; }

        [Required]
        public string NombreEmpresa { get; set; }

        [Required]
        public string NombreContacto { get; set; }

        [Required]
        [EmailAddress]
        public string CorreoElectronico { get; set; }

        [Required]
        public string Telefono { get; set; }
    }
}
