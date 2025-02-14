using Microsoft.EntityFrameworkCore;

namespace GestaoDePlanosTelefonicos.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Cliente> Clientes { get; set; }
    public DbSet<Plano> Planos { get; set; }
    public DbSet<ClientePlano> ClientePlanos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var clienteId1 = Guid.NewGuid();
        var clienteId2 = Guid.NewGuid();
        var clienteId3 = Guid.NewGuid();
        var clienteId4 = Guid.NewGuid();

        modelBuilder.Entity<Cliente>().HasData(
            new Cliente
            {
                Id = clienteId1,
                NomeCompleto = "Lucas Martins de Oliveira",
                CPF = "12345678912",
                Telefone = "11 91234-1234",
                Email = "lucas@email.com"
            },
            new Cliente
            {
                Id = clienteId2,
                NomeCompleto = "Alec",
                CPF = "98765432110",
                Telefone = "11 91235-1235",
                Email = "alec@email.com"
            },
            new Cliente
            {
                Id = clienteId3,
                NomeCompleto = "Larissa Oliveira Silva",
                CPF = "45678912314",
                Telefone = "11 91236-1236",
                Email = "larissa@email.com"
            },
            new Cliente
            {
                Id = clienteId4,
                NomeCompleto = "Jefferson Leonardo",
                CPF = "12378945647",
                Telefone = "11 91237-1237",
                Email = "jefferson@email.com"
            }
        );

        var planoid1 = Guid.NewGuid();
        var planoid2 = Guid.NewGuid();
        var planoid3 = Guid.NewGuid();
        var planoid4 = Guid.NewGuid();

        modelBuilder.Entity<Plano>().HasData(
            new Plano
            {
                Id = planoid1,
                Nome = "Básico",
                Preco = 10.5M,
                FranquiaDados = 10,
                MinutosLigacao = 10
            },
            new Plano
            {
                Id = planoid2,
                Nome = "Intermediário",
                Preco = 25.75M,
                FranquiaDados = 20,
                MinutosLigacao = 20
            },
            new Plano
            {
                Id = planoid3,
                Nome = "Completo",
                Preco = 65.49M,
                FranquiaDados = 30,
                MinutosLigacao = 30
            },
            new Plano
            {
                Id = planoid4,
                Nome = "Premium",
                Preco = 145.90M,
                FranquiaDados = 999,
                MinutosLigacao = 999
            }
        );

        modelBuilder.Entity<ClientePlano>().HasData(
            new ClientePlano
            {
                Id = Guid.NewGuid(),
                ClienteID = clienteId1,
                PlanoID = planoid1
            },
            new ClientePlano
            {
                Id = Guid.NewGuid(),
                ClienteID = clienteId2,
                PlanoID = planoid3
            },
            new ClientePlano
            {
                Id = Guid.NewGuid(),
                ClienteID = clienteId3,
                PlanoID = planoid4
            },
            new ClientePlano
            {
                Id = Guid.NewGuid(),
                ClienteID = clienteId4,
                PlanoID = planoid1
            }
        );
        base.OnModelCreating(modelBuilder);
    }
}