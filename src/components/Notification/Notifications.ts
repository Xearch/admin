/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from '@/src/global/style/Notify.module.css'
import { notifications } from '@mantine/notifications'

export const toastSuccess = (message: string) => {
  notifications.show({
    color: 'green',
    message,
    classNames: classes,
  })
}

export const toastWarning = (message: string) => {
  notifications.show({
    color: 'yellow',
    message,
    classNames: classes,
  })
}

export const toastInfo = (message: string) => {
  notifications.show({
    color: 'blue',
    message,
    classNames: classes,
  })
}

export const toastError = (error: unknown | string) => {
  if (error) {
    const err = error as any
    notifications.show({
      title: 'A requisição retornou o seguinte erro:',
      color: 'red',
      message:
        typeof err?.response?.data?.validation?.body?.message === 'string'
          ? String(err?.response?.data?.validation?.body?.message)
          : undefined || typeof err?.response?.data?.validation?.query?.message === 'string'
          ? String(err?.response?.data?.validation?.query?.message)
          : undefined || typeof err?.response?.data?.message === 'string'
          ? String(err?.response?.data?.message)
          : undefined || err?.response?.data?.data || String(err),
      classNames: classes,
    })
  }
}
