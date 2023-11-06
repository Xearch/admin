import { formatDistanceToNowStrict } from 'date-fns'
import localeBR from 'date-fns/locale/pt-BR'

export function formatDateInTime(date: Date | string): string {
  const dateFormatted = formatDistanceToNowStrict(new Date(String(date)), {
    locale: localeBR,
    addSuffix: true,
  })
  return dateFormatted
}
