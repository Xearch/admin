import { isThisMonth } from 'date-fns'

export const dateIsThisMonthCurrent = (date: Date | string | undefined): boolean => {
  return isThisMonth(new Date(String(date)))
}
