'use client'

import { Children } from '@/src/contexts'
import { useAuth } from '@/src/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useRefreshToken } from '../services/endpoints/useRefreshToken'

export const dynamic = 'force-dynamic'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export function PrivateRoute({ children }: Children) {
  const { data: token } = useRefreshToken()
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { pathname } = window.location
      if (user && token && pathname === '/') {
        router.push('/home')
      }
      if (!user && pathname !== '/') {
        router.push('/')
      }
    }
  }, [user, router, token])
  return children
}
