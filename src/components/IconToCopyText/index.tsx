'use client'

import classes from '@/src/global/style/Cards.module.css'
import { copyToClipboard } from '@/src/services/utils/copyToClipboard'
import { Tooltip } from '@mantine/core'
import { IconCopy } from '@tabler/icons-react'

import { toastSuccess } from '../Notification/Notifications'
import { returnStrings } from '../returnStrings'

type Props = {
  text: string | number
}
export function IconToCopyText({ text }: Props) {
  return (
    <>
      {text && !returnStrings.includes(String(text)) && (
        <Tooltip label="Copiar">
          <IconCopy
            className={classes.iconCopy}
            onClick={() => {
              copyToClipboard(text)
              toastSuccess('Copiado com sucesso')
            }}
          />
        </Tooltip>
      )}
    </>
  )
}
