import { api } from '@/src/services/api'
import getOnlyNumbers from '@/src/services/utils/getOnlyNumbers'

import { CepResponseType, Pontos } from '../types'

export interface Address {
  city: string
  state: string
  zipcode: string
  district: string
  address: string
  uf: string
  location: Pontos
}
export async function searchAddressByCep(zipcode: string): Promise<Address | null> {
  const cep = getOnlyNumbers(zipcode)
  if (cep) {
    try {
      const { data } = await api.get<CepResponseType>(`/cep/${getOnlyNumbers(cep)}`)

      const dataCep = {
        city: data.data.v2.cidade,
        state: data.data.v2.estado,
        zipcode: getOnlyNumbers(data.data.v2.cep),
        district: data.data.v2.bairro,
        address: data.data.v2.rua,
        uf: data.data.v2.estado,
        location: data.data.v2.pontos,
      }

      return dataCep
    } catch {
      return null
    }
  }
  return null
}
