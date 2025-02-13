namespace GestaoDePlanosTelefonicos.Data;

public class Cliente
{
    public Guid Id { get; set; }
    public required string NomeCompleto { get; set; }
    public required string CPF { get; set; }
    public required string Telefone { get; set; }
    public required string Email { get; set; }

    public ICollection<ClientePlano>? ClientePlanos { get; set; }
}