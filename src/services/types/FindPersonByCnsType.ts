interface Data {
  success: boolean
  created_at: string
  cadsus: Cadsus
}
interface Cadsus {
  cpf: string
  cns: string
  cns_url: string
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
  cidade_codigo: string
  estado_nome: string
  estado_codigo: string
  numero: string
  tipo_endereco: string
  telefone: string
  possivel_whatsapp: string
  email: string
  vivo: boolean
}
export interface FindPersonByCnsType {
  data: Data
  ip: string
}
