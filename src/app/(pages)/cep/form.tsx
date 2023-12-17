'use client'

import { ContainerForm } from '@/src/components/form/ContainerForm'
import MaskInput from '@/src/components/form/InputMask'
import { Address, searchAddressByCep } from '@/src/services/endpoints/searchAddressByCep'
import { useForm } from '@mantine/form'
import { useState } from 'react'

import { FindAddressByCepCard, SkeletonCepCard } from './FindAdressByCepCard/FindAddressByCepCard'

export function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [address, setAddress] = useState<Address | null>(null)
  const form = useForm({
    initialValues: {
      cep: '',
    },
    validate: {
      cep: value => value.length === 0 && 'Campo obrigatório',
    },
  })

  const handleSearcher = async () => {
    setIsLoading(true)
    const response = await searchAddressByCep(form.values.cep)
    setAddress(response)
    setIsLoading(false)
  }

  return (
    <>
      <ContainerForm
        onSubmit={form.onSubmit(handleSearcher)}
        isLoading={isLoading}
        onClick={() => {
          setAddress(null)
          form.setValues({ cep: '' })
        }}
        pageTitle="CEP"
      >
        <MaskInput
          mask="99.999-999"
          label="CEP"
          name="cep"
          placeholder="Digite um CEP"
          required
          {...form.getInputProps('cep')}
        />
      </ContainerForm>

      {isLoading ? <SkeletonCepCard /> : <FindAddressByCepCard address={address} />}
    </>
  )
}
