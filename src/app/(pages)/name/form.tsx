'use client'

import { CardSkeleton, FindByNameCard } from '@/src/app/(pages)/name/FindByNameCard/FindByNameCard'
import { ContainerForm } from '@/src/components/form/ContainerForm'
import { toastError } from '@/src/components/Notification/Notifications'
import { searchByName } from '@/src/services/endpoints/searchByName'
import { FindByNameType } from '@/src/services/types'
import { TextInput, Box, CloseButton, Alert } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconInfoCircle } from '@tabler/icons-react'
import { useState } from 'react'

export function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [people, setPeople] = useState<FindByNameType>()
  const form = useForm({
    initialValues: {
      name: '',
      termsOfService: false,
    },
    validate: {
      name: value =>
        value.length === 0
          ? 'Campo obrigatório'
          : value.length < 4
          ? 'O nome precisa ter pelo menos 4 caracteres'
          : null,
    },
  })

  const handleSearcher = async () => {
    setIsLoading(true)
    try {
      const response = await searchByName(form.values.name)
      setPeople(response)
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
          setPeople(undefined)
          form.setValues({ name: '' })
        }}
        pageTitle="NOME"
      >
        <TextInput
          miw={{ base: 100, sm: 500, xs: 290 }}
          name="name"
          placeholder="Digite um nome"
          required
          {...form.getInputProps('name')}
          rightSection={
            <CloseButton
              onClick={() => {
                form.setValues({ name: '' })
                setPeople(undefined)
              }}
            />
          }
        />
      </ContainerForm>

      {isLoading ? (
        <CardSkeleton />
      ) : people && people.data?.length === 0 ? (
        <Box maw={500} mx="auto" mt={50}>
          <Alert variant="light" color="blue" title="Informação" icon={<IconInfoCircle />}>
            Nenhum registro foi encontrado para a busca.
          </Alert>
        </Box>
      ) : (
        people && <FindByNameCard people={people} />
      )}
    </>
  )
}
