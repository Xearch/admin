export default function parseCurrency(entry?: string | number): string {
  const intl = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  if (!entry) intl.format(0)
  return intl.format(Number(entry))
}
