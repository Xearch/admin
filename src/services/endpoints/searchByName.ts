/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/src/services/api'
import { FindByNameType } from '@/src/services/types'
import useSWR, { SWRResponse } from 'swr'

type FindByName = (name: string) => Promise<FindByNameType | undefined>

export const searchByName: FindByName = async name => {
  if (name) {
    const { data: users } = await api.get(`name/${encodeURIComponent(name)}`, {
      params: { v: 1 },
    })
    return users
  }
  return undefined
}

export function useFindByName(name: string): SWRResponse<FindByNameType | undefined, any, any> {
  return useSWR('searchByName', () => searchByName(name))
}
