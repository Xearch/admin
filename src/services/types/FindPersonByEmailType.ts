interface Data {
  nome: string
  cpf: string
  email: string
}
export interface FindPersonByEmailType {
  dataConsulta: string
  data: Data[]
  ip: string
}
