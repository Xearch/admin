'use client'

import { ContainerForm } from '@/src/components/form/ContainerForm'
import { toastError } from '@/src/components/Notification/Notifications'
import { useQueryParams } from '@/src/hooks/useQueryParams'
import { searchPersonByEmail } from '@/src/services/endpoints/searchByEmail'
import { FindPersonByEmailType } from '@/src/services/types'
import { removeFirstParam } from '@/src/services/utils/format-url/removeFirstParam'
import { CloseButton, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'

import { CardsSkeletonUsers } from '../name/FindByNameCard/FindByNameCard'
import { FindPersonByEmailCard } from './card/FindPersonByEmailCard'

export function Form() {
  const email = useQueryParams('email')
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

  if (!form.values.email && email) {
    form.setValues({ email })
  }

  return (
    <>
      <ContainerForm
        onSubmit={form.onSubmit(handleSearcher)}
        isLoading={isLoading}
        onClick={() => {
          setPerson(null)
          form.setValues({ email: '' })
          removeFirstParam('email')
        }}
        pageTitle="EMAIL"
      >
        <TextInput
          miw={{ base: 100, sm: 500, xs: 290 }}
          name="email"
          placeholder="Digite um email"
          required
          onChangeCapture={() => removeFirstParam('email')}
          {...form.getInputProps('email')}
          rightSection={
            <CloseButton
              onClick={() => {
                form.setValues({ email: '' })
                setPerson(null)
                removeFirstParam('email')
              }}
            />
          }
        />
      </ContainerForm>

      {isLoading ? <CardsSkeletonUsers /> : <FindPersonByEmailCard data={person} />}
    </>
  )
}
