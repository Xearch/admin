/* eslint-disable consistent-return */
import { toastError } from '@/src/components/Notification/Notifications'
import { authChanel, localStorageKeys } from '@/src/contexts/AuthContext'
import { api } from '@/src/services/api'
import useSWR, { SWRResponse } from 'swr'

import { verifyToken } from '../utils/verifyToken'

type Output = {
  accessToken: string
}

type RefreshToken = () => Promise<Output>

function signOut() {
  localStorage.removeItem(localStorageKeys.token)
  localStorage.removeItem(localStorageKeys.user)
  authChanel.postMessage('signOut')
  window.location.href = '/'
}

export const refreshToken: RefreshToken = async () => {
  const tokenInStorage = localStorage.getItem(localStorageKeys.token)
  if (tokenInStorage) {
    api.defaults.headers.authorization = `Bearer ${tokenInStorage}`
    try {
      verifyToken(tokenInStorage)
      const { data } = await api.post(`/refresh-token`, {})
      const { accessToken } = data
      localStorage.removeItem(localStorageKeys.token)
      localStorage.setItem(localStorageKeys.token, accessToken)
      api.defaults.headers.authorization = `Bearer ${accessToken}`
      return data
    } catch (error) {
      toastError(error)
      signOut()
    }
  } else signOut()
}

export function useRefreshToken(): SWRResponse<Output, any, any> {
  return useSWR(['RefreshToken'], () => refreshToken(), {
    revalidateIfStale: true,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 1000 * 60 * 50, // Refresh every 50 minutes
  })
}
