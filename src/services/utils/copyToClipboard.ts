export function copyToClipboard(text: string | number): void {
  navigator.clipboard.writeText(String(text))
}
