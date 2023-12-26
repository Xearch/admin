'use client'

import classes from '@/src/global/style/Cards.module.css'
import { copyToClipboard } from '@/src/services/utils/copyToClipboard'
import { Tooltip } from '@mantine/core'
import { IconCopy } from '@tabler/icons-react'

import { toastSuccess } from '../Notification/Notifications'

type Props = {
  text: string | number
}
export function IconToCopyText({ text }: Props) {
  return (
    <Tooltip label="Copiar">
      <IconCopy
        className={classes.iconCopy}
        onClick={() => {
          copyToClipboard(text)
          toastSuccess('Copiado com sucesso')
        }}
      />
    </Tooltip>
  )
}
