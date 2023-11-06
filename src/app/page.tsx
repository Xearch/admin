'use client'

import { Logo } from '@/src/app/Layout/logo'
import { TextInput, PasswordInput, Anchor, Paper, Text, Container, Group, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'E-mail inválido'),
      password: value => (value.length === 0 ? 'Senha obrigatória' : null),
    },
  })

  function handleLogin(path: string) {
    router.push(path)
  }

  return (
    <Container size={420} my={40}>
      <Logo />
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Não tem conta ainda?{' '}
        <Anchor size="sm" component="button" onClick={() => router.push('/account')}>
          Crie uma conta
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit(() => {
            handleLogin('/home')
          })}
          noValidate
        >
          <TextInput
            withAsterisk
            label="Email"
            placeholder="seu@email.com"
            required
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Senha"
            placeholder="Sua senha"
            required
            mt="md"
            {...form.getInputProps('password')}
          />
          <Group justify="space-between" mt="lg">
            <Anchor component="button" size="sm">
              Esqueceu a senha?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Entrar
          </Button>
        </form>
      </Paper>
    </Container>
  )
}
