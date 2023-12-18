import { api } from '@/src/services/api'
import { FindPersonByEmailType } from '@/src/services/types'
import format from 'date-fns/format'

type searchPersonByEmail = (email: string) => Promise<FindPersonByEmailType>

export const searchPersonByEmail: searchPersonByEmail = async email => {
  const { data: response } = await api.get<FindPersonByEmailType>(`/email/${email}`, {
    params: { v: 1 },
  })
  const formattedResponse = {
    ...response,
    dataConsulta: format(new Date(), `dd/MM/yyyy 'às' HH:mm:ss`),
  } as FindPersonByEmailType

  return formattedResponse
}
