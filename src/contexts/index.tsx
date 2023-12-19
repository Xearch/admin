import AuthProvider from './AuthContext'
import { SidebarDrawerProvider } from './SidebarDrawerContext'

export type Children = {
  children: React.ReactNode
}

export function AppProvider({ children }: Children) {
  return (
    <AuthProvider>
      <SidebarDrawerProvider>{children}</SidebarDrawerProvider>
    </AuthProvider>
  )
}
