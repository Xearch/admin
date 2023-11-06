export default function getOnlyNumbers(entry: string): string {
  const regex = /[^\d+]/g
  return entry.replace(regex, '')
}
