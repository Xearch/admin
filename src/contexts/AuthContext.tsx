/* eslint-disable react/jsx-no-constructed-context-values */

'use client'

import { useRouter } from 'next/navigation'
import React, { createContext, useContext, useState } from 'react'

import { Children } from '.'
import { api } from '../services/api'

interface SignInRequest {
  doc: string
  password: string
}

export interface UserType {
  name: string
  image?: string
  email: string
  id: number
  cpf: string
  cnpj?: null
  verified_email: boolean
  token: string
}

interface SignInResponse {
  user: UserType
  token: string
}

interface AuthContextData {
  user: UserType
  signIn: (data: SignInRequest) => Promise<void>
  signOut: () => void
}

const localStorageKeys = {
  token: '@xearch:token',
  user: '@xearch:user',
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export default function AuthProvider({ children }: Children) {
  const router = useRouter()
  const [data, setData] = useState<SignInResponse>(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(localStorageKeys.token)
      const user = localStorage.getItem(localStorageKeys.user)

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`
        return { token, user: JSON.parse(user) }
      }
    }

    return {} as SignInResponse
  })

  async function signIn({ doc, password }: SignInRequest) {
    const response = await api.post<UserType>('/login', { doc, password })

    const user = response.data
    const { token } = user

    localStorage.setItem(localStorageKeys.token, token)
    localStorage.setItem(localStorageKeys.user, JSON.stringify(user))

    api.defaults.headers.authorization = `Bearer ${token}`
    router.push('/home')

    setData({ token, user })
  }

  function signOut() {
    localStorage.removeItem(localStorageKeys.token)
    localStorage.removeItem(localStorageKeys.user)

    setData({} as SignInResponse)
    router.push('/')
  }

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth() must be used within AuthProvider')
  return context
}
