/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from '@/src/components/form/ContainerForm/ContainerForm.module.css'
import { Button, Flex, StyleProp } from '@mantine/core'
import { FormEventHandler } from 'react'

type Props = {
  direction?: StyleProp<React.CSSProperties['flexDirection']>
  onClick: () => void
  isLoading: boolean
  onSubmit: FormEventHandler<HTMLFormElement>
  children: React.ReactNode
}

export function ContainerForm({ children, onClick, onSubmit, isLoading, direction }: Props) {
  return (
    <Flex w="100%" mx="auto" justify="center">
      <form onSubmit={onSubmit} noValidate>
        <Flex gap={10} direction={direction || { base: 'column', xs: 'row' }} className={classes.container}>
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
    </Flex>
  )
}
