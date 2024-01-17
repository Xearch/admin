export const scrollToTop = (top?: number): void => {
  window.scrollTo({ top: top || 0, behavior: 'smooth' })
}
