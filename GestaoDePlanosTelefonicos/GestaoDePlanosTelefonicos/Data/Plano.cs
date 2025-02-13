namespace GestaoDePlanosTelefonicos.Data;

public class Plano
{
    public Guid Id { get; set; }
    public required string Nome { get; set; }
    public decimal Preco { get; set; }
    public int FranquiaDados { get; set; }
    public int MinutosLigacao { get; set; }

    public ICollection<ClientePlano>? ClientePlanos { get; set; }
}
