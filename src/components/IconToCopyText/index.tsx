import classes from '@/src/global/style/Cards.module.css'
import { copyToClipboard } from '@/src/services/utils/copyToClipboard'
import { Flex, Tooltip } from '@mantine/core'
import { IconCopy } from '@tabler/icons-react'

import { toastSuccess } from '../Notification/Notifications'

type Props = {
  text?: string | number
}
export function IconToCopyText({ text }: Props) {
  return (
    text && (
      <Flex miw={25}>
        <Tooltip label="Copiar">
          <IconCopy
            className={classes.cardTitle}
            onClick={() => {
              copyToClipboard(text)
              toastSuccess('Copiado com sucesso')
            }}
          />
        </Tooltip>
      </Flex>
    )
  )
}
