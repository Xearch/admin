export function getAlphanumeric(entry: string): string {
  const regex = /[^a-zA-Z0-9]/g
  return entry.replace(regex, '')
}
