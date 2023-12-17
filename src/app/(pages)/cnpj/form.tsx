'use client'

import { ContainerForm } from '@/src/components/form/ContainerForm'
import MaskInput from '@/src/components/form/InputMask'
import { searchAddressByCNPJ } from '@/src/services/endpoints/searchAddressByCNPJ'
import { CnpjResponse } from '@/src/services/types'
import { useForm } from '@mantine/form'
import { useState } from 'react'

import { FindPJByCnpjCard, SkeletonCnpjCard } from './FindPJByCnpjCard/FindPJByCnpjCard'

export function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [person, setPerson] = useState<CnpjResponse | null>(null)
  const form = useForm({
    initialValues: {
      cnpj: '',
    },
    validate: {
      cnpj: value => value.length === 0 && 'Campo obrigatório',
    },
  })

  const handleSearcher = async () => {
    setIsLoading(true)
    const response = await searchAddressByCNPJ(form.values.cnpj)
    setPerson(response)
    setIsLoading(false)
  }

  return (
    <>
      <ContainerForm
        onSubmit={form.onSubmit(handleSearcher)}
        isLoading={isLoading}
        onClick={() => {
          setPerson(null)
          form.setValues({ cnpj: '' })
        }}
        pageTitle="CNPJ"
      >
        <MaskInput
          mask="99.999.999/9999-99"
          label="CNPJ"
          name="cnpj"
          placeholder="Digite um CNPJ"
          required
          {...form.getInputProps('cnpj')}
        />
      </ContainerForm>

      {isLoading ? <SkeletonCnpjCard /> : person && <FindPJByCnpjCard person={person} />}
    </>
  )
}
