﻿using Microsoft.EntityFrameworkCore;

namespace APIWeeUsuarios.Models
{
    public class UsuarioContext : DbContext
    {
        public UsuarioContext(DbContextOptions<UsuarioContext> options)
            : base(options)
        { }

        public DbSet<Usuario> Usuarios { get; set; }
    }
}
