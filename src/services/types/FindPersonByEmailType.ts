interface Data {
  nome: string
  cpf: string
  telefone: string
}
export interface FindPersonByEmailType {
  dataConsulta: string
  data: Data[]
  ip: string
}
