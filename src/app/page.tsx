'use client'

import { Logo } from '@/src/app/Layout/logo'
import { TextInput, PasswordInput, Anchor, Paper, Container, Group, Button } from '@mantine/core'
import { useForm } from '@mantine/form'

import { toastError } from '../components/Notification/Notifications'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const { signIn } = useAuth()
  const form = useForm({
    initialValues: {
      doc: '',
      password: '',
    },
    validate: {
      doc: value => (value.length === 0 ? 'Documentos obrigatório' : null),
      password: value => (value.length === 0 ? 'Senha obrigatória' : null),
    },
  })

  const handleSignIn = async () => {
    try {
      await signIn({ doc: form.values.doc, password: form.values.password })
    } catch (error) {
      toastError(error)
    }
  }
  return (
    <Container size={420} my={40}>
      <Logo />
      {/* <Text c="dimmed" size="sm" ta="center" mt={5}>
        Não tem conta ainda?{' '}
        <Anchor size="sm" component="button" onClick={() => router.push('/account')}>
          Crie uma conta
        </Anchor>
      </Text> */}

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSignIn)} noValidate>
          <TextInput
            withAsterisk
            label="CPF ou CNPJ"
            placeholder="Seu documento"
            required
            {...form.getInputProps('doc')}
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
