import classes from '@/src/global/style/Cards.module.css'
import { Button, Card, Flex, StyleProp, Title } from '@mantine/core'
import { FormEventHandler } from 'react'

type Props = {
  direction?: StyleProp<React.CSSProperties['flexDirection']>
  onClick: () => void
  isLoading: boolean
  onSubmit: FormEventHandler<HTMLFormElement>
  children: React.ReactNode
  pageTitle: string
}

export function ContainerForm({ children, onClick, onSubmit, isLoading, direction, pageTitle }: Props) {
  return (
    <Flex w="100%">
      <Card shadow="md" radius="md" w="100%" py="xl" className={classes.card}>
        <Title mb={20} className={classes.title} ta="center">
          CONSULTA POR {pageTitle}
        </Title>
        <form onSubmit={onSubmit} noValidate>
          <Flex
            gap={10}
            direction={direction || { base: 'column', xs: 'row' }}
            align="center"
            className={classes.container}
            justify="center"
          >
            {children}
            <Flex justify="center" gap={10}>
              <Button color="blue" type="submit" variant="outline" size="xs" loading={isLoading}>
                Buscar
              </Button>
              <Button color="red" onClick={onClick} variant="outline" size="xs" loading={isLoading}>
                Limpar
              </Button>
            </Flex>
          </Flex>
        </form>
      </Card>
    </Flex>
  )
}
