interface Data {
  nome: string
  cpf: string
  rgNumero?: string
  rgEmissorOrgao?: string
  rgEmissorUf?: string
  tituloEleitor?: string
  pisNis?: string
  sexo: string
  estadoCivil?: string
  naturalidade?: string
  nacionalidade?: string
  dataNascimento: string
  dataObito?: string
  nomeMae: string
  nomePai?: string
  escolaridade: string
  ocupacao: string
  renda: number
  poderAquisitivo: string
  classeSocial: string
  subClasseSocial: string
  score: number
  situacaoRF: string
  enderecos?: Enderecos[] | null
  emails?: Emails[] | null
  telefones?: Telefones[] | null
  empresas?: Empresas[] | null
  familiares?: Familiares[] | null
  vizinhos?: Vizinhos[] | null
  dataConsulta: string
}

interface Empresas {
  nome: string
  cnpj: string
}
interface Vizinhos {
  id: number
  nome: string
}

interface Enderecos {
  cep: string
  endereco: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  estadoUF: string
}

interface Emails {
  email: string
  usoPessoal: string
  duplicado: string
  backlist: string
  score: string
  status: string
}
interface Telefones {
  ddd: string
  numero: string
}

interface Familiares {
  nome: string
  cpf: string
  vinculo: string
}

export interface FindCompleteCpfType {
  data: Data
  ip: string
}
