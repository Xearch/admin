import { Text, Container, ActionIcon, Group, rem, Flex } from '@mantine/core'
import { IconBrandInstagram, IconBrandWhatsapp } from '@tabler/icons-react'
import Link from 'next/link'

import { Logo } from '../logo'
import classes from './Footer.module.css'

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.afterFooter}>
        <Flex align="center" gap={10} justify="center" direction="column">
          <Logo h={20} w={50} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Seu buscador de dador particular.
          </Text>
        </Flex>

        <Text c="dimmed" size="sm">
          © 2023 Xearch. Todos os direitos reservados.
        </Text>

        {/* <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Link href="https://wa.me/5587991272829" target="_blank">
              <IconBrandWhatsapp style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </Link>
          </ActionIcon>

          <ActionIcon size="lg" color="gray" variant="subtle">
            <Link href="https://www.instagram.com/walygo_" target="_blank">
              <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </Link>
          </ActionIcon>
        </Group> */}
      </Container>
    </footer>
  )
}
