export interface Data {
  tem_restricao_spc: string
  nome: string
  idade: string
  dataNascimento: string
  tituloEleitoral: string
  extrangeiro: string
  cpf: string
  cpfRegiao: string
  situacaoCpf: string
  dataSituacaoCpf: string
  telefoneCelular: TelefoneCelular
  rg: string
  uf_rg: string
  nomeMae: string
  nomePai: string
  sexo: string
  signo: string
  endereco: Endereco
  dividasSpc: DividasSpc
  ultimoTelefone: string
  ultimoEndereco: string
  alertaDocumento: string
  dataConsulta: string
}
export interface TelefoneCelular {
  'numero-ddd': string
  numero: string
}
export interface Endereco {
  logradouro: string
  numero: string
  complemento: string
  bairro: string
  cep: string
  cidade: Cidade
}
export interface Cidade {
  nome: string
  estado: Estado
}
export interface Estado {
  'sigla-uf': string
}
export interface DividasSpc {
  'quantidade-total': string
  'data-ultima-ocorrencia': string
  'valor-total': string
  detalhes: Detalhes
}
export interface Detalhes {
  'nome-associado': string
  'data-inclusao': string
  'data-vencimento': string
  'nome-entidade': string
  contrato: string
  'registro-instituicao-financeira': string
  'comprador-fiador-avalista': string
  valor: string
  'cidade-associado': CidadeAssociado
  'telefone-associado': TelefoneAssociado
}
export interface CidadeAssociado {
  nome: string
  estado: Estado
}
export interface TelefoneAssociado {
  'numero-ddd': string
  numero: string
}
export interface CpfResponseBySpcType {
  data: Data
  success: boolean
  ip: string
}
