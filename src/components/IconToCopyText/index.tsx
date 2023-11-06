import { copyToClipboard } from '@/src/services/utils/copyToClipboard'
import { Tooltip } from '@mantine/core'
import { IconCopy } from '@tabler/icons-react'

import { toastSuccess } from '../Notification/Notifications'

type Props = {
  text?: string | number
}
export function IconToCopyText({ text }: Props) {
  return (
    text && (
      <Tooltip label="Copiar">
        <IconCopy
          fontSize={1}
          onClick={() => {
            copyToClipboard(text)
            toastSuccess('Copiado com sucesso')
          }}
        />
      </Tooltip>
    )
  )
}
