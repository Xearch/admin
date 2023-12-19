/* eslint-disable react/jsx-no-constructed-context-values */

'use client'

import { useDisclosure } from '@mantine/hooks'
import { usePathname } from 'next/navigation'
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface SidebarDrawerProviderProps {
  children: ReactNode
}

type SidebarDrawerContextData = {
  close: () => void
  open: () => void
  opened: boolean
  toggle: () => void
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps): JSX.Element {
  const [opened, { toggle, close, open }] = useDisclosure(false)
  const pathname = usePathname()

  useEffect(() => {
    close()
  }, [pathname, close])

  return (
    <SidebarDrawerContext.Provider value={{ opened, close, toggle, open } as SidebarDrawerContextData}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export function useSidebarDrawer(): SidebarDrawerContextData {
  const context = useContext(SidebarDrawerContext)
  if (!context) throw new Error('useSidebarDrawer() must be used within SidebarDrawerProvider!')
  return context
}
