export default function parseNumberToCashBRL(entry?: number | string): string {
  if (!entry) return '0'
  return String(entry).replace('.', ',')
}
