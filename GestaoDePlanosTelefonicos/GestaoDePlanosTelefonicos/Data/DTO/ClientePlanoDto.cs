namespace GestaoDePlanosTelefonicos.Data.DTO
{
    public class ClientePlanoDto
    {
        public Guid Id { get; set; }

        public string NomePlano { get; set; }
        public decimal Preco { get; set; }
        public int FranquiaDados { get; set; }
        public int MinutosLigacao { get; set; }

        public string NomeCompleto { get; set; }
        public string CPF { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
    }
}
