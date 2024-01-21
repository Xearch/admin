'use client'

import { ContainerForm } from '@/src/components/form/ContainerForm'
import MaskInput from '@/src/components/form/InputMask'
import { toastError } from '@/src/components/Notification/Notifications'
import { useQueryParams } from '@/src/hooks/useQueryParams'
import { searchPersonByCns } from '@/src/services/endpoints/searchByCns'
import { FindPersonByCnsType } from '@/src/services/types'
import { removeFirstParam } from '@/src/services/utils/format-url/removeFirstParam'
import { Flex } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'

import { CardsSkeletonUsersCpf } from '../cpf/FindByCpfCards/SkeletonCpfCard'
import { FindPersonByCnsCard } from './card/FindPersonByCnsCard'

export function Form() {
  const cns = useQueryParams('cns')
  const [isLoading, setIsLoading] = useState(false)
  const [dataCns, setDataCns] = useState<FindPersonByCnsType>()
  const form = useForm({
    initialValues: {
      cns: '',
    },
    validate: {
      cns: value => value.length === 0 && 'Campo obrigatório',
    },
  })

  const handleSearcher = async () => {
    setIsLoading(true)
    setDataCns(undefined)
    try {
      const response = await searchPersonByCns(form.values.cns)
      setDataCns(response)
    } catch (error) {
      toastError(error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!form.values.cns && cns) {
    form.setValues({ cns })
  }

  return (
    <>
      <ContainerForm
        direction="column"
        onSubmit={form.onSubmit(handleSearcher)}
        isLoading={isLoading}
        onClick={() => {
          setDataCns(undefined)
          form.setValues({ cns: '' })
          removeFirstParam('cns')
        }}
        pageTitle="CNS"
      >
        <Flex maw={800} justify="center">
          <MaskInput
            mask="9999999999999999999999999999999999999999"
            label="CNS"
            name="cns"
            onChangeCapture={() => removeFirstParam('cns')}
            placeholder="Digite um CNS"
            required
            {...form.getInputProps('cns')}
          />
        </Flex>
      </ContainerForm>

      {isLoading && <CardsSkeletonUsersCpf />}
      {dataCns && <FindPersonByCnsCard data={dataCns} />}
    </>
  )
}
