import { useRef } from 'react'

export const useScroll = () => {
  const viewportRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () =>
    viewportRef.current!.scrollTo({ top: viewportRef.current!.scrollHeight, behavior: 'smooth' })

  const scrollToCenter = () =>
    viewportRef.current!.scrollTo({ top: viewportRef.current!.scrollHeight / 2, behavior: 'smooth' })

  const scrollToTop = (top = 0) => {
    viewportRef.current!.scrollTo({ top, behavior: 'smooth' })
  }

  return { scrollToBottom, scrollToCenter, scrollToTop, viewportRef }
}
