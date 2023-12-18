export interface Data {
  success: boolean
  created_at: string
  cadsus: Cadsus
}
export interface Cadsus {
  cpf: string
  cns: string
  cartao_cns: string
  nome: string
  data_nascimento: string
  idade: number
  sexo: string
  mae: string
  pai: string
  codigo_raca_cor: number
  nome_raca_cor: string
  descricao_raca_cor: string
  codigo_pais: number
  nome_pais: string
  cep: string
  logradouro: string
  bairro: string
  cidade_nome: string
  cidade_codigo: number
  estado_nome: string
  estado_codigo: number
  numero: string
  tipo_endereco: string
  telefone: string
  possivel_whatsapp: string
  email: string
  vivo: boolean
}
export interface FindCnsByCpfType {
  data: Data
  ip: string
}
