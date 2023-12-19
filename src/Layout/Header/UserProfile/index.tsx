import { useAuth } from '@/src/contexts/AuthContext'
import classes from '@/src/Layout/Header/UserProfile/UserProfile.module.css'
import {
  Avatar,
  Group,
  MantineSize,
  Menu,
  rem,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core'
import {
  IconChevronDown,
  IconLogout,
  IconMoon,
  IconSettings,
  IconSun,
  IconSwitchHorizontal,
} from '@tabler/icons-react'
import cx from 'clsx'
import router from 'next/router'
import { useState } from 'react'

type Props = {
  visibleFrom?: MantineSize
}

export function UserProfile({ visibleFrom }: Props) {
  const { user, signOut } = useAuth()
  const { setColorScheme, colorScheme } = useMantineColorScheme()
  const [userMenuOpened, setUserMenuOpened] = useState(false)

  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right' }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, {
            [classes.userActive]: userMenuOpened,
          })}
          visibleFrom={visibleFrom}
        >
          {user && (
            <Group gap={7}>
              <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
              <Text fw={500} size="sm" lh={1} mr={3}>
                {user.name}
              </Text>
              <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
            </Group>
          )}
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Tema</Menu.Label>

        <Menu.Item
          onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
          leftSection={
            colorScheme === 'dark' ? (
              <IconSun style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
            ) : (
              <IconMoon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            )
          }
        >
          {colorScheme === 'light' ? 'Escuro' : 'Claro'}
        </Menu.Item>

        <Menu.Label>Configurações</Menu.Label>
        <Menu.Item
          onClick={() => router.push('/list')}
          leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        >
          Configurar conta
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        >
          Mudar de conta
        </Menu.Item>
        <Menu.Item
          onClick={() => signOut()}
          leftSection={<IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
        >
          Sair
        </Menu.Item>

        <Menu.Divider />
      </Menu.Dropdown>
    </Menu>
  )
}
