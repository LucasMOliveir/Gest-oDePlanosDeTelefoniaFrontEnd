namespace GestaoDePlanosTelefonicos.Data.DTO
{
    public class ClienteDto
    {
        public Guid? Id { get; set; }
        public required string Nome { get; set; }
        public required decimal Preco { get; set; }
        public required int FranquiaDados { get; set; }
        public required int MinutosLigacao { get; set; }
    }
}
