'use client'

import { ContainerForm } from '@/src/components/form/ContainerForm'
import MaskInput from '@/src/components/form/InputMask'
import { searchByLicensePlate } from '@/src/services/endpoints/searchByLicensePlate'
import { FindByLicensePlateType } from '@/src/services/types'
import { useForm } from '@mantine/form'
import { useState } from 'react'

import { FindLicensePlateCard, SkeletonLicensePlateCard } from './FindLicensePlateCard/FindLicensePlateCard'

export function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<FindByLicensePlateType | null>(null)
  const form = useForm({
    initialValues: {
      license_plate: '',
    },
    validate: {
      license_plate: value => value.length === 0 && 'Campo obrigatório',
    },
  })

  const handleSearcher = async () => {
    setIsLoading(true)
    const response = await searchByLicensePlate(form.values.license_plate)
    setData(response)
    setIsLoading(false)
  }

  return (
    <>
      <ContainerForm
        onSubmit={form.onSubmit(handleSearcher)}
        isLoading={isLoading}
        onClick={() => {
          setData(null)
          form.setValues({ license_plate: '' })
        }}
        pageTitle="PLACA"
      >
        <MaskInput
          mask="aaa-9*99"
          label="Placa"
          name="license_plate"
          placeholder="Digite uma placa"
          required
          {...form.getInputProps('license_plate')}
        />
      </ContainerForm>
      {isLoading ? <SkeletonLicensePlateCard /> : data && <FindLicensePlateCard data={data} />}
    </>
  )
}
