'use client'

import { Children } from '@/src/contexts'
import { useAuth } from '@/src/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function PrivateRoute({ children }: Children) {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathName = window.location.pathname
      if (!user && pathName !== '/') {
        router.replace('/')
      }
    }
  }, [user, router])
  return children
}
