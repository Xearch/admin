interface Data {
  nomeProprietario: string
  placa: string
  renavam: string
  chassi: string
  anoModelo: number
  tempoCirculacao: string
  marca: string
  marcaImage: string
  modelo: string
  dataDaConsulta: string
  status: string
  cidade: string
  estado: string
  cor: string
  anoFabricacao: string
  eixos: string
  especie: string
  tipoVeiculo: string
  tipoCarroceria?: null
  segmento: string
  descricao: string
}
export interface FindByLicensePlateType {
  data: Data
  success: boolean
  ip: string
}
