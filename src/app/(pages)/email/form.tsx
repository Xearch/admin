'use client'

import { ContainerForm } from '@/src/components/form/ContainerForm'
import { toastError } from '@/src/components/Notification/Notifications'
import { searchPersonByEmail } from '@/src/services/endpoints/searchByEmail'
import { FindPersonByEmailType } from '@/src/services/types'
import { CloseButton, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'

import { CardsSkeletonUsers } from '../name/FindByNameCard/FindByNameCard'
import { FindPersonByEmailCard } from './card/FindPersonByEmailCard'

export function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [person, setPerson] = useState<FindPersonByEmailType | null>(null)
  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: value =>
        (value.length === 0 && 'Campo obrigatório') || (/^\S+@\S+$/.test(value) ? null : 'E-mail inválido'),
    },
  })

  const handleSearcher = async () => {
    try {
      setIsLoading(true)
      const response = await searchPersonByEmail(form.values.email)
      setPerson(response)
    } catch (error) {
      toastError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <ContainerForm
        onSubmit={form.onSubmit(handleSearcher)}
        isLoading={isLoading}
        onClick={() => {
          setPerson(null)
          form.setValues({ email: '' })
        }}
        pageTitle="EMAIL"
      >
        <TextInput
          miw={{ base: 100, sm: 500, xs: 290 }}
          name="email"
          placeholder="Digite um email"
          required
          {...form.getInputProps('email')}
          rightSection={
            <CloseButton
              onClick={() => {
                form.setValues({ email: '' })
                setPerson(null)
              }}
            />
          }
        />
      </ContainerForm>

      {isLoading ? <CardsSkeletonUsers /> : <FindPersonByEmailCard data={person} />}
    </>
  )
}
