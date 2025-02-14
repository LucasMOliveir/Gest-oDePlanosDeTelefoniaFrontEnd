namespace GestaoDePlanosTelefonicos.Data
{
    public class ClientePlano
    {
        public Guid Id { get; set; }
        public Guid ClienteID { get; set; }
        public virtual Cliente Cliente { get; set; }
        public Guid PlanoID { get; set; }
        public virtual Plano Plano { get; set; }
    }
}