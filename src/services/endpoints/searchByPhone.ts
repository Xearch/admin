import { api } from '@/src/services/api'
import { FindPersonByPhoneType } from '@/src/services/types'
import getOnlyNumbers from '@/src/services/utils/getOnlyNumbers'
import format from 'date-fns/format'

type searchPersonByPhone = (phone: string) => Promise<FindPersonByPhoneType>

export const searchPersonByPhone: searchPersonByPhone = async phone => {
  const { data: response } = await api.get<FindPersonByPhoneType>(`/phone/${getOnlyNumbers(phone)}`, {
    params: { v: 1 },
  })
  const formattedResponse = {
    ...response,
    dataConsulta: format(new Date(), `dd/MM/yyyy 'às' HH:mm:ss`),
  } as FindPersonByPhoneType

  return formattedResponse
}
