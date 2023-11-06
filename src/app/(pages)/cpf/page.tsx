import Layout from '@/src/app/Layout/index'

import { Form } from './form'

export const metadata = {
  title: 'Consulta por CPF',
}

export default function FindByCpf() {
  return (
    <Layout>
      <Form />
    </Layout>
  )
}
