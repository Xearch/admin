'use client'

import { useSidebarDrawer } from '@/src/contexts/SidebarDrawerContext'
import classes from '@/src/Layout/Header/Header.module.css'
import { UserProfile } from '@/src/Layout/Header/UserProfile'
import { Logo } from '@/src/Layout/logo'
import { Burger, Drawer, Flex } from '@mantine/core'

import { SidebarNav } from '../Sidebar/SidebarNav'

export default function Header() {
  const { close, opened, toggle } = useSidebarDrawer()

  return (
    <div className={classes.main}>
      <Flex px={40} className={classes.header}>
        <Logo />

        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        <Drawer opened={opened} onClose={close} position="left" size="xs" title="Menu" w={100}>
          <SidebarNav />
          <UserProfile />
        </Drawer>

        <UserProfile visibleFrom="md" />
      </Flex>
    </div>
  )
}
