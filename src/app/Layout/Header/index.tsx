'use client'

import classes from '@/src/app/Layout/Header/Header.module.css'
import { UserProfile } from '@/src/app/Layout/Header/UserProfile'
import { Logo } from '@/src/app/Layout/logo'
import { Container, Group, Tabs, Burger, useMantineColorScheme, Popover, Flex } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useRouter, usePathname } from 'next/navigation'

import { tabsNames } from './tabsNames'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { colorScheme } = useMantineColorScheme()
  const [opened, { toggle }] = useDisclosure(false)

  const items = tabsNames.map(tab => {
    const onClick = () => {
      router.push(tab.value)
    }
    return (
      <Tabs.Tab
        value={tab.value}
        bg={pathname === `/${tab.value}` ? (colorScheme === 'dark' ? '#141517' : '#DEE2E6') : ''}
        key={tab.value}
        onClick={onClick}
        disabled={tab.value === '#'}
      >
        {tab.label}
      </Tabs.Tab>
    )
  })

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <Container className={classes.mainSection} size="md">
          <Group justify="space-between">
            <Logo />

            <Popover opened={opened} width={300} trapFocus position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
              </Popover.Target>
              <Popover.Dropdown>
                <Flex justify="center" direction="column" gap={4} align="center">
                  <Tabs variant="pills">
                    <Tabs.List>
                      <Flex direction="column">{items}</Flex>
                    </Tabs.List>
                  </Tabs>
                  <UserProfile />
                </Flex>
              </Popover.Dropdown>
            </Popover>

            <UserProfile visibleFrom="md" />
          </Group>
        </Container>
        <Container size="md">
          <Tabs
            defaultValue="Home"
            variant="outline"
            visibleFrom="sm"
            classNames={{
              root: classes.tabs,
              list: classes.tabsList,
              tab: classes.tab,
            }}
          >
            <Tabs.List>{items}</Tabs.List>
          </Tabs>
        </Container>
      </div>
    </div>
  )
}
