import classes from '@/src/app/Layout/Navbar/Navbar.module.css'
import { ScrollArea } from '@mantine/core'
import { IconNotes, IconGauge, Icon24Hours } from '@tabler/icons-react'

import { NavbarLinksGroup } from './LinksGroup'
import { tabsNames } from './tabsNames'

const mockData = [
  { label: 'Dashboard', icon: IconGauge, links: [{ label: 'Início', value: 'home' }] },
  {
    label: 'Consultas Pro',
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
    label: 'Contato',
    icon: Icon24Hours,
    links: [
      {
        label: 'Suporte',
        value: 'https://api.whatsapp.com/send/?phone=5587991272829&text&type=phone_number&app_absent=0',
      },
    ],
  },
  // {
  //   label: 'Releases',
  //   icon: IconCalendarStats,
  //   links: [
  //     { label: 'Upcoming releases', value: '/' },
  //     { label: 'Previous releases', value: '/' },
  //     { label: 'Releases schedule', value: '/' },
  //   ],
  // },
  // { label: 'Contracts', icon: IconFileAnalytics },
  // { label: 'Settings', icon: IconAdjustments },
  // {
  //   label: 'Security',
  //   icon: IconLock,
  //   links: [
  //     { label: 'Enable 2FA', value: '/' },
  //     { label: 'Change password', value: '/' },
  //     { label: 'Recovery codes', value: '/' },
  //   ],
  // },
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
