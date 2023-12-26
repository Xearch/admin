import { useSidebarDrawer } from '@/src/contexts/SidebarDrawerContext'
import { Drawer } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { UserProfile } from '../Header/UserProfile'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const { close, opened } = useSidebarDrawer()
  const matches = useMediaQuery('(min-width: 65em)')
  return (
    <>
      {matches && <SidebarNav />}
      <Drawer opened={opened} onClose={close} position="left" size="xs" title="Menu" w={100}>
        <UserProfile />
        <SidebarNav />
      </Drawer>
    </>
  )
}
