interface Data {
  nome: string
  cpf: string
  telefone: string
}
export interface FindPersonByPhoneType {
  dataConsulta: string
  data: Data[]
  ip: string
}
