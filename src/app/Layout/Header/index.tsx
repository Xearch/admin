'use client'

import classes from '@/src/app/Layout/Header/Header.module.css'
import { UserProfile } from '@/src/app/Layout/Header/UserProfile'
import { Logo } from '@/src/app/Layout/logo'
import { Burger, Popover, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <div className={classes.main}>
      <Flex px={40} className={classes.header}>
        <Logo />

        <Popover opened={opened} width={300} trapFocus position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          </Popover.Target>
          <Popover.Dropdown>
            <UserProfile />
          </Popover.Dropdown>
        </Popover>
        <UserProfile visibleFrom="md" />
      </Flex>
    </div>
  )
}
