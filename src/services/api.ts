/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosError } from 'axios'

type MethodRequest = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

type RequestOptions = {
  url: string
  requestDefault?: boolean
  options?: RequestInit | MethodRequest | undefined
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  params: {
    key: process.env.NEXT_PUBLIC_KEY_API,
  },
})

api.interceptors.response.use(
  response => {
    return response
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export async function fetchApi<T = any>({
  url,
  options,
  requestDefault = false,
}: RequestOptions): Promise<T> {
  let input = `${process.env.NEXT_PUBLIC_BASE_API}/${url}&key=${process.env.NEXT_PUBLIC_KEY_API}`
  if (requestDefault) input = url

  try {
    const response = await fetch(input, options)
    console.log('input', input)
    console.log('response', response)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data: T = await response.json()
    return data
  } catch (error) {
    console.error('Houve um problema com a sua solicitação Fetch:', error)
    throw error
  }
}

const brasilApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BRASIL_API,
})

brasilApi.interceptors.response.use(
  response => {
    return response
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

const apiDefault = axios.create()

apiDefault.interceptors.response.use(
  response => {
    return response
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export { brasilApi, api, apiDefault }
