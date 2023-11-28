export interface UserProfileType {
  token: string
  user: User
}
export interface User {
  id: number
  name: string
  email: string
  active: boolean
  banned: boolean
  active_end_date_at?: null
  suspended_account: boolean
  cnpj?: null
  cpf: string
  verified_email: boolean
  created_at: string
  deleted_at?: null
  ip: string
  last_ip?: null
  plans?: any[] | null
  keys?: Keys[] | null
}
export interface Keys {
  id: number
  key: string
  userId: number
  created_at: string
}
