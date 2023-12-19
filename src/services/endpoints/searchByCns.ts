import { FindPersonByCnsType } from '@/src/services//types'
import { api } from '@/src/services/api'
import getOnlyNumbers from '@/src/services/utils/getOnlyNumbers'
import { setMaskCpf } from '@/src/services/utils/setMaskCpf'
import format from 'date-fns/format'

type SearchCnsByCpf = (cns: string) => Promise<FindPersonByCnsType>

export const searchPersonByCns: SearchCnsByCpf = async cns => {
  const { data: response } = await api.get<FindPersonByCnsType>(`/cns/${getOnlyNumbers(cns)}`, {
    params: { v: 1 },
  })
  const formattedResponse = {
    ...response,
    data: {
      created_at: format(new Date(), `dd/MM/yyyy`),
      cadsus: {
        ...response.data.cadsus,
        cpf: setMaskCpf(response.data.cadsus.cpf),
        cns_url: response.data.cadsus.cartao_cns
          ? `https://api.xearch.pro${response.data.cadsus.cartao_cns}`
          : '',
        data_nascimento: response.data.cadsus.data_nascimento || '',
      } as FindPersonByCnsType['data']['cadsus'],
    } as FindPersonByCnsType['data'],
  } as FindPersonByCnsType
  return formattedResponse
}
