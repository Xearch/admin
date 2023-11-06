'use client'

import { Logo } from '@/src/app/Layout/logo'
import { TextInput, PasswordInput, Paper, Container, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      emailConfirmation: '',
      password: '',
      passwordConfirmation: '',
    },
    validate: {
      name: value =>
        value.length === 0
          ? 'Campo obrigatório'
          : value.length < 4
          ? 'O nome precisa ter pelo menos 4 caracteres'
          : /^[a-zA-Z]+$/.test(value)
          ? null
          : 'Nome inválido! Apenas letras',
      email: value => (/^\S+@\S+$/.test(value) ? null : 'E-mail inválido'),
      emailConfirmation: (value, values) => (value === values.email ? null : 'E-mails não coincidem'),
      password: value =>
        regex.test(value)
          ? null
          : `Senha inválida! A senha precisa ter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial`,
      passwordConfirmation: (value, values) =>
        value.length === 0 ? 'Campo obrigatório' : value === values.password ? null : 'Senhas não coincidem',
    },
  })

  function handleCreateAccount(path: string) {
    router.push(path)
  }

  return (
    <Container size={420} my={40}>
      <Logo />

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit(() => {
            handleCreateAccount('/home')
          })}
          noValidate
        >
          <TextInput
            withAsterisk
            label="Nome"
            placeholder="Seu nome"
            required
            {...form.getInputProps('name')}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="seu@email.com"
            required
            {...form.getInputProps('email')}
          />
          <TextInput
            withAsterisk
            label="Confirme o email"
            placeholder="seu@email.com"
            required
            {...form.getInputProps('emailConfirmation')}
          />
          <PasswordInput
            label="Senha"
            placeholder="Sua senha"
            required
            mt="md"
            {...form.getInputProps('password')}
          />
          <PasswordInput
            label="Confirme a senha"
            placeholder="Confirme a sua senha"
            required
            mt="md"
            {...form.getInputProps('passwordConfirmation')}
          />

          <Button fullWidth mt="xl" type="submit" color="orange">
            Criar conta
          </Button>
        </form>
      </Paper>
    </Container>
  )
}
