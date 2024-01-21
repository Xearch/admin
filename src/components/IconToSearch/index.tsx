'use client'

import classes from '@/src/global/style/Cards.module.css'
import { setParamToUrl } from '@/src/services/utils/format-url/setParamToUrl'
import { Tooltip } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

import { returnStrings } from '../returnStrings'

type Props = {
  params: {
    param_name: string
    param_value: string | number
    url?: string
  }
}
export function IconToSearch({ params }: Props) {
  const { param_name, param_value } = params
  return (
    <>
      {param_value && !returnStrings.includes(String(param_value)) && (
        <Tooltip label="Buscar">
          <IconSearch
            className={classes.iconCopy}
            onClick={() => {
              const urlUpdated = setParamToUrl({ param_name, param_value, url: params.url })
              window.open(urlUpdated, '_blank')
            }}
          />
        </Tooltip>
      )}
    </>
  )
}
