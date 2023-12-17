import classes from '@/src/app/Layout/Navbar/Navbar.module.css'
import { ScrollArea } from '@mantine/core'
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react'

import { NavbarLinksGroup } from './LinksGroup'
import { tabsNames } from './tabsNames'

const mockData = [
  { label: 'Dashboard', icon: IconGauge, links: [{ label: 'Início', value: 'home' }] },
  {
    label: 'Consultas',
    icon: IconNotes,
    initiallyOpened: false,
    links: tabsNames,
  },
  {
    label: 'Consultas Grátis',
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: 'Consulta por CNPJ', value: 'cnpj' },
      { label: 'Consulta por CEP', value: 'cep' },
    ],
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
  const links = mockData.map(item => <NavbarLinksGroup {...item} key={item.label} />)

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  )
}
