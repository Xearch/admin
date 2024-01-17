import classes from '@/src/Layout/Sidebar/Sidebar.module.css'
import { ScrollArea } from '@mantine/core'
import { Icon24Hours, IconGauge, IconNotes } from '@tabler/icons-react'

import { SidebarLinksGroup } from './LinksGroup'
import { tabsNames } from './tabsNames'

const mockData = [
  {
    label: 'Início',
    icon: IconGauge,
    links: [
      { label: 'Políticas e termos de uso', value: 'home' },
      { label: 'Dados do usuário', value: 'profile' },
    ],
  },
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
        value: 'https://tawk.to/xearchsuporte',
      },
    ],
  },
]

export function SidebarNav() {
  const links = mockData.map(item => <SidebarLinksGroup {...item} key={item.label} />)

  return (
    <nav className={classes.Sidebar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  )
}
