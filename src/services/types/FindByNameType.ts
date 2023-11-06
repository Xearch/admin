interface Data {
  nome: string
  cpf: string
  idade: number
  nomeMae: string
}
export interface FindByNameType {
  data?: Data[] | null
  ip: string
}
