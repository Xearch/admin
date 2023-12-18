import { CpfResponseBySpcType, FindCompleteCpfType, FindSimpleCpfType } from '@/src/services//types'
import { api } from '@/src/services/api'
import getOnlyNumbers from '@/src/services/utils/getOnlyNumbers'
import format from 'date-fns/format'

import { FindCnsByCpfType } from '../types/FindCnsByCpfType'
import { setMaskCpf } from '../utils/setMaskCpf'

type FindCompleteByCpf = (cpf: string) => Promise<FindCompleteCpfType>

export const searchByCpfComplete: FindCompleteByCpf = async cpf => {
  const { data: response } = await api.get<FindCompleteCpfType>(`cpf/${getOnlyNumbers(cpf)}`, {
    params: { type: 'complete', v: 1 },
  })
  const formattedResponse = {
    ...response,
    data: {
      ...response.data,
      cpf: setMaskCpf(response.data.cpf),
      dataConsulta: format(new Date(), `dd/MM/yyyy`),
      dataNascimento: format(new Date(response.data.dataNascimento), `dd/MM/yyyy`),
    } as FindCompleteCpfType['data'],
  } as FindCompleteCpfType
  return formattedResponse
}

type FindCnsByCpf = (cpf: string) => Promise<FindCnsByCpfType>

export const searchCnsByCpf: FindCnsByCpf = async cpf => {
  const { data: response } = await api.get<FindCnsByCpfType>(`cpf/${getOnlyNumbers(cpf)}`, {
    params: { type: 'cns', v: 1 },
  })
  const formattedResponse = {
    ...response,
    data: {
      created_at: format(new Date(), `dd/MM/yyyy`),
      cadsus: {
        ...response.data.cadsus,
        cpf: setMaskCpf(response.data.cadsus.cpf),
        data_nascimento: response.data.cadsus.data_nascimento || '',
      } as FindCnsByCpfType['data']['cadsus'],
    } as FindCnsByCpfType['data'],
  } as FindCnsByCpfType
  return formattedResponse
}

type FindSimpleByCpf = (cpf: string) => Promise<FindSimpleCpfType>

export const searchByCpfSimple: FindSimpleByCpf = async cpf => {
  const { data: response } = await api.get<FindSimpleCpfType>(`cpf/${getOnlyNumbers(cpf)}`, {
    params: { type: 'simple', v: 1 },
  })
  if (response.data.success === false) throw new Error(response.data.message)
  const formattedResponse = {
    ...response,
    data: {
      ...response.data,
      cpf: setMaskCpf(response.data.cpf),
      dataConsulta: format(new Date(), `dd/MM/yyyy 'às' HH:mm:ss`),
    },
  } as FindSimpleCpfType

  return formattedResponse
}

type FindDataCpfBySpc = (cpf: string) => Promise<CpfResponseBySpcType>

export const searchDataCpfBySpc: FindDataCpfBySpc = async cpf => {
  const { data: response } = await api.get<CpfResponseBySpcType>(`spc/${getOnlyNumbers(cpf)}`, {
    params: { v: 1 },
  })
  const formattedResponse = {
    ...response,
    data: {
      ...response.data,
      dataConsulta: format(new Date(), `dd/MM/yyyy 'às' HH:mm:ss`),
    },
  } as CpfResponseBySpcType

  return formattedResponse
}
