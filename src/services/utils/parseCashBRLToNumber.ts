export default function parseCashBRLToNumber(entry: string): number {
  const removeDot = entry.replace('.', '')
  return Number(removeDot.replace(',', '.'))
}
