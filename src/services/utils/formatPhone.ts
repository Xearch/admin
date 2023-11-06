export default function formatPhoneNumber(phoneNumber: string): string {
  const cleanedNumber = phoneNumber.replace(/\D/g, '')
  if (cleanedNumber.length !== 11) {
    return phoneNumber
  }
  const formattedPhone = cleanedNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
  return formattedPhone
}
