interface V1 {
  cep: string
  estado: string
  cidade: string
  bairro: string
  rua: string
}
interface Data {
  v1: V1
  v2: V2
}
interface V2 {
  cep: string
  estado: string
  cidade: string
  bairro: string
  rua: string
  pontos: Pontos
  tipo_pontos: string
}
export interface Pontos {
  longitude: string
  latitude: string
}
export interface CepResponseType {
  data: Data
  ip: string
}
