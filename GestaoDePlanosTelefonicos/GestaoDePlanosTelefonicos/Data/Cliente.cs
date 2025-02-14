namespace GestaoDePlanosTelefonicos.Data;

public class Cliente
{
    public Guid? Id { get; set; }
    public required string NomeCompleto { get; set; }
    public required string CPF { get; set; }
    public required string Telefone { get; set; }
    public required string Email { get; set; }

    public virtual ICollection<ClientePlano>? ClientePlanos { get; set; }
}