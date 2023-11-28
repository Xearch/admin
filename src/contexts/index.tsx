import AuthProvider from './AuthContext'

export type Children = {
  children: React.ReactNode
}

export function AppProvider({ children }: Children) {
  return <AuthProvider>{children}</AuthProvider>
}
