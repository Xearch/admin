'use client'

import { Children } from '@/src/contexts'
import { useAuth } from '@/src/contexts/AuthContext'
import { useRouter, usePathname } from 'next/navigation'

export default function PrivateRoute({ children }: Children) {
  const pathName = usePathname()
  const router = useRouter()
  const { user } = useAuth()
  if (!user && pathName !== '/') router.replace('/')
  return children
}
