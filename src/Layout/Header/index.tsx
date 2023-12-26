'use client'

import { useSidebarDrawer } from '@/src/contexts/SidebarDrawerContext'
import classes from '@/src/Layout/Header/Header.module.css'
import { UserProfile } from '@/src/Layout/Header/UserProfile'
import { Logo } from '@/src/Layout/logo'
import { Burger, Flex } from '@mantine/core'

import { Sidebar } from '../Sidebar/Sidebar'

export default function Header() {
  const { opened, toggle } = useSidebarDrawer()

  return (
    <div className={classes.main}>
      <Flex px={40} className={classes.header}>
        <Logo />

        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        <Sidebar />

        <UserProfile visibleFrom="md" />
      </Flex>
    </div>
  )
}
