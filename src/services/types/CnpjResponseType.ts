export interface CnpjResponse {
  abertura: string
  situacao: string
  tipo: string
  nome: string
  fantasia: string
  porte: string
  natureza_juridica: string
  atividade_principal?: AtividadePrincipal[] | null
  atividades_secundarias?: AtividadesSecundarias[] | null
  qsa?: Qsa[] | null
  logradouro: string
  numero: string
  municipio: string
  bairro: string
  uf: string
  cep: string
  email: string
  telefone: string
  data_situacao: string
  cnpj: string
  ultima_atualizacao: string
  status: string
  complemento: string
  efr: string
  motivo_situacao: string
  situacao_especial: string
  data_situacao_especial: string
  capital_social: string
  billing: Billing
}
export interface AtividadePrincipal {
  code: string
  text: string
}
export interface AtividadesSecundarias {
  code: string
  text: string
}
export interface Qsa {
  nome: string
  qual: string
}
export interface Billing {
  free: boolean
  database: boolean
}
export interface CnpjResponseType {
  data: CnpjResponse
  ip: string
}
