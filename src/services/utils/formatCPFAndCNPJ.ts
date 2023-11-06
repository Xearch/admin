export default function formatCPFAndCNPJ(input: string): string | null {
  const cleanedInput = input.replace(/\D/g, '')

  if (cleanedInput.length === 11) {
    return cleanedInput.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }
  if (cleanedInput.length === 14) {
    return cleanedInput.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
  }

  return null
}
