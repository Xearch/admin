interface Data {
  message?: string
  success: boolean
  cpf: string
  nome: string
  data_nascimento: string
  idade: number
  sexo: string
  dataConsulta: string
}
export interface FindSimpleCpfType {
  data: Data
  ip: string
}
