/* eslint-disable consistent-return */
import { authChanel, localStorageKeys } from '@/src/contexts/AuthContext'
import { api } from '@/src/services/api'
import useSWR, { SWRResponse } from 'swr'

type Output = {
  accessToken: string
}

type RefreshToken = () => Promise<Output>

export const refreshToken: RefreshToken = async () => {
  const tokenInStorage = localStorage.getItem(localStorageKeys.token)
  if (tokenInStorage) {
    try {
      const { data } = await api.post(`/refresh-token`)
      const { accessToken } = data
      localStorage.removeItem(localStorageKeys.token)
      localStorage.setItem(localStorageKeys.token, accessToken)
      api.defaults.headers.authorization = `Bearer ${accessToken}`
      return data
    } catch (error) {
      localStorage.removeItem(localStorageKeys.token)
      localStorage.removeItem(localStorageKeys.user)
      authChanel.postMessage('signOut')
      window.location.href = '/'
    }
  }
}

export function useRefreshToken(): SWRResponse<Output, any, any> {
  return useSWR(['RefreshToken'], () => refreshToken(), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 1000 * 60 * 50, // Refresh every 50 minutes
  })
}
