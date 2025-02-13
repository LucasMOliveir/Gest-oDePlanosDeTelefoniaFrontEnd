using Microsoft.EntityFrameworkCore;

namespace GestaoDePlanosTelefonicos.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Cliente> Clientes { get; set; }
    public DbSet<Plano> Planos { get; set; }
    public DbSet<ClientePlano> ClientePlanos { get; set; }
}
