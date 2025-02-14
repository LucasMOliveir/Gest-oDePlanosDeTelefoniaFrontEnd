namespace GestaoDePlanosTelefonicos.Data;

public class Plano
{
    public Guid? Id { get; set; }
    public required string Nome { get; set; }
    public required decimal Preco { get; set; }
    public required int FranquiaDados { get; set; }
    public required int MinutosLigacao { get; set; }

    public virtual ICollection<ClientePlano>? ClientePlanos { get; set; }
}
