'use client'

import { ContainerForm } from '@/src/components/form/ContainerForm'
import MaskInput from '@/src/components/form/InputMask'
import { toastError } from '@/src/components/Notification/Notifications'
import { useQueryParams } from '@/src/hooks/useQueryParams'
import { searchPersonByPhone } from '@/src/services/endpoints/searchByPhone'
import { FindPersonByPhoneType } from '@/src/services/types'
import { removeFirstParam } from '@/src/services/utils/format-url/removeFirstParam'
import { useForm } from '@mantine/form'
import { useState } from 'react'

import { CardsSkeletonUsers } from '../name/FindByNameCard/FindByNameCard'
import { FindPersonByPhoneCard } from './card/FindPersonByPhoneCard'

export function Form() {
  const phone = useQueryParams('phone')
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

  if (!form.values.phone && phone) {
    form.setValues({ phone })
  }

  return (
    <>
      <ContainerForm
        onSubmit={form.onSubmit(handleSearcher)}
        isLoading={isLoading}
        onClick={() => {
          setPerson(null)
          form.setValues({ phone: '' })
          removeFirstParam('phone')
        }}
        pageTitle="TELEFONE"
      >
        <MaskInput
          mask="(99) 9 9999-9999"
          label="Telefone"
          name="phone"
          placeholder="Digite um telefone"
          onChangeCapture={() => removeFirstParam('phone')}
          required
          {...form.getInputProps('phone')}
        />
      </ContainerForm>

      {isLoading ? <CardsSkeletonUsers /> : <FindPersonByPhoneCard data={person} />}
    </>
  )
}
