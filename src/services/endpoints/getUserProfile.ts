import { api } from '@/src/services/api'
import { UserProfileType } from '@/src/services/types'
import { format } from 'date-fns'
import useSWR, { SWRResponse } from 'swr'

type GetUserProfile = () => Promise<UserProfileType | undefined>

export const getUserProfile: GetUserProfile = async () => {
  const { data: userProfile } = await api.get(`/me`, {
    params: { v: 1 },
  })

  const formattedUser = {
    token: userProfile.token,
    user: {
      ...userProfile.user,
      created_at: userProfile.user.created_at
        ? format(new Date(userProfile.user.created_at), 'dd/MM/yyyy')
        : undefined,
    } as UserProfileType['user'],
  }

  return formattedUser
}

export function useGetUserProfile(): SWRResponse<UserProfileType | undefined, any, any> {
  return useSWR('getUserProfile', () => getUserProfile(), { revalidateOnFocus: true })
}
