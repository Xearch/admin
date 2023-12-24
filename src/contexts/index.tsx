'use client'

import { useRefreshToken } from '../services/endpoints/useRefreshToken'
import AuthProvider from './AuthContext'
import { SidebarDrawerProvider } from './SidebarDrawerContext'

export type Children = {
  children: React.ReactNode
}

export function AppProvider({ children }: Children) {
  useRefreshToken()
  return (
    <AuthProvider>
      <SidebarDrawerProvider>{children}</SidebarDrawerProvider>
    </AuthProvider>
  )
}
