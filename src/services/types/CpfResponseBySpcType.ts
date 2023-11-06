export interface Data {
  success: boolean
  created_at: string
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
  dividasSpc: string
  ultimoTelefone: string
  ultimoEndereco: string
  alertaDocumento: AlertaDocumento
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
export interface AlertaDocumento {
  'quantidade-total': string
  'data-ultima-ocorrencia': string
}
export interface CpfResponseBySpcType {
  data: {
    data: Data
  }
  ip: string
}
