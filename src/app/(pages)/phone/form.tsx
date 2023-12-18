'use client'

import { ContainerForm } from '@/src/components/form/ContainerForm'
import MaskInput from '@/src/components/form/InputMask'
import { toastError } from '@/src/components/Notification/Notifications'
import { searchPersonByPhone } from '@/src/services/endpoints/searchByPhone'
import { FindPersonByPhoneType } from '@/src/services/types'
import { useForm } from '@mantine/form'
import { useState } from 'react'

import { CardsSkeletonUsers } from '../name/FindByNameCard/FindByNameCard'
import { FindPersonByPhoneCard } from './card/FindPersonByPhoneCard'

export function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [person, setPerson] = useState<FindPersonByPhoneType | null>(null)
  const form = useForm({
    initialValues: {
      phone: '',
    },
    validate: {
      phone: value => value.length === 0 && 'Campo obrigatório',
    },
  })

  const handleSearcher = async () => {
    try {
      setIsLoading(true)
      const response = await searchPersonByPhone(form.values.phone)
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
          form.setValues({ phone: '' })
        }}
        pageTitle="TELEFONE"
      >
        <MaskInput
          mask="(99) 9 9999-9999"
          label="Telefone"
          name="phone"
          placeholder="Digite um telefone"
          required
          {...form.getInputProps('phone')}
        />
      </ContainerForm>

      {isLoading ? <CardsSkeletonUsers /> : <FindPersonByPhoneCard data={person} />}
    </>
  )
}
