import classes from '@/src/app/Layout/Navbar/Navbar.module.css'
import { Group, rem, ScrollArea } from '@mantine/core'
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react'

import { tabsNames } from '../Header/tabsNames'
import { UserProfile } from '../Header/UserProfile'
import { Logo } from '../logo'
import { NavbarLinksGroup } from './LinksGroup'

const mockdata = [
  { label: 'Dashboard', icon: IconGauge, links: [{ label: 'Início', value: 'home' }] },
  {
    label: 'Consultas',
    icon: IconNotes,
    initiallyOpened: false,
    links: tabsNames,
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', value: '/' },
      { label: 'Previous releases', value: '/' },
      { label: 'Releases schedule', value: '/' },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', value: '/' },
      { label: 'Change password', value: '/' },
      { label: 'Recovery codes', value: '/' },
    ],
  },
]

export function Navbar() {
  const links = mockdata.map(item => <NavbarLinksGroup {...item} key={item.label} />)

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo style={{ width: rem(120) }} />
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserProfile />
      </div>
    </nav>
  )
}
