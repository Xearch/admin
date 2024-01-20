import { useSearchParams } from 'next/navigation'

export function useQueryParams(queryName: string): string {
  const { get } = useSearchParams()
  const result = get(queryName)
  if (result) return result
  return ''
}
