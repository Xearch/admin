import { Container, Flex, Text } from '@mantine/core'

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
      </Container>
    </footer>
  )
}
