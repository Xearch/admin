/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/src/services/api'
import { getAlphanumeric } from '@/src/services/utils/getAlphanumeric'
import { format } from 'date-fns'

import { FindByLicensePlateType } from '../types'

type ResultByLicensePlate = (license_plate: string) => Promise<FindByLicensePlateType>

export const searchByLicensePlate: ResultByLicensePlate = async license_plate => {
  const { data: response } = await api.get<FindByLicensePlateType>(`placa/${getAlphanumeric(license_plate)}`)
  const formattedResponse = {
    ...response,
    data: {
      ...response.data,
      dataDaConsulta: format(new Date(), 'dd/MM/yyyy'),
    },
  } as FindByLicensePlateType
  return formattedResponse
}
