'use client'

import { CnsByCpfCard } from '@/src/app/(pages)/cpf/FindByCpfCards/CnsByCpfCard'
import { CompleteCpfCard } from '@/src/app/(pages)/cpf/FindByCpfCards/CompleteCpfCard'
import { SimpleCpfCard } from '@/src/app/(pages)/cpf/FindByCpfCards/SimpleCpfCard'
import { CardSkeletonCpf } from '@/src/app/(pages)/cpf/FindByCpfCards/SkeletonCpfCard'
import { ContainerForm } from '@/src/components/form/ContainerForm'
import MaskInput from '@/src/components/form/InputMask'
import { toastError } from '@/src/components/Notification/Notifications'
import {
  searchByCpfComplete,
  searchByCpfSimple,
  searchCnsByCpf,
  searchDataCpfBySpc,
} from '@/src/services/endpoints/searchByCpf'
import { CpfResponseBySpcType, FindCompleteCpfType, FindSimpleCpfType } from '@/src/services/types'
import { FindCnsByCpfType } from '@/src/services/types/FindCnsByCpfType'
import { validateCpf } from '@/src/services/utils/validateCpf'
import { Group, Radio, Grid, Flex } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'

import { SpcByCpfCard } from './FindByCpfCards/SpcByCpfCard'

export function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [dataCpfSimple, setDataCpfSimple] = useState<FindSimpleCpfType>()
  const [dataCpfComplete, setDataCpfComplete] = useState<FindCompleteCpfType>()
  const [dataCns, setDataCns] = useState<FindCnsByCpfType>()
  const [dataSpc, setDataSpc] = useState<CpfResponseBySpcType>()
  const form = useForm({
    initialValues: {
      cpf: '',
      type_search: '',
    },
    validate: {
      cpf: value => (value.length === 0 ? 'Campo obrigatório' : validateCpf(value) ? null : 'CPF inválido'),
      type_search: value => (value.length === 0 ? 'Selecione um tipo de consulta' : null),
    },
  })

  const handleSearcher = async () => {
    setIsLoading(true)
    setDataCpfSimple(undefined)
    setDataCpfComplete(undefined)
    setDataCns(undefined)
    setDataSpc(undefined)
    try {
      if (form.values.type_search === 'simple') {
        const response = await searchByCpfSimple(form.values.cpf)
        setDataCpfSimple(response)
      } else if (form.values.type_search === 'complete') {
        const response = await searchByCpfComplete(form.values.cpf)
        setDataCpfComplete(response)
      } else if (form.values.type_search === 'cns') {
        const response = await searchCnsByCpf(form.values.cpf)
        setDataCns(response)
      } else if (form.values.type_search === 'spc') {
        const response = await searchDataCpfBySpc(form.values.cpf)
        setDataSpc(response)
      }
    } catch (error) {
      toastError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <ContainerForm
        direction="column"
        onSubmit={form.onSubmit(handleSearcher)}
        isLoading={isLoading}
        onClick={() => {
          setDataCpfSimple(undefined)
          setDataCpfComplete(undefined)
          setDataCns(undefined)
          setDataSpc(undefined)
          form.setValues({ cpf: '' })
        }}
      >
        <Grid grow>
          <Grid.Col span={8}>
            <Radio.Group
              name="type_search"
              label="Selecione o tipo"
              withAsterisk
              {...form.getInputProps('type_search')}
            >
              <Group mt={5}>
                <Radio label="Consulta simples" value="simple" />
                <Radio label="Consulta completa" value="complete" />
                <Radio label="Dados CNS (Cartão Nacional Social)" value="cns" />
                <Radio label="Dados SPC" value="spc" />
              </Group>
            </Radio.Group>
          </Grid.Col>
        </Grid>

        <Flex maw={800} justify="center">
          <MaskInput
            mask="999.999.999-99"
            label="CPF"
            name="cpf"
            placeholder="Digite um CPF"
            required
            {...form.getInputProps('cpf')}
          />
        </Flex>
      </ContainerForm>

      {isLoading && <CardSkeletonCpf />}
      {dataCpfSimple && <SimpleCpfCard data={dataCpfSimple} />}
      {dataCpfComplete && <CompleteCpfCard data={dataCpfComplete} />}
      {dataCns && <CnsByCpfCard data={dataCns} />}
      {dataSpc && <SpcByCpfCard data={dataSpc} />}
    </>
  )
}
