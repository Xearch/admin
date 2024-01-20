/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { Flex, Text } from '@mantine/core'
import InputMask, { Props as InputMaskProps } from 'react-input-mask'

interface Props extends InputMaskProps {
  name: string
  label: string
  value?: any
  error?: string
}

export default function MaskInput({ mask, ...props }: Props) {
  return (
    <Flex direction="column">
      <InputMask
        {...(props as any)}
        maskChar=""
        mask={mask}
        placeholder={props.placeholder}
        autoComplete="off"
      />
      {props.error && (
        <Flex mt={5}>
          <Text size="xs" component="span" c="red">
            {props.error}
          </Text>
        </Flex>
      )}
    </Flex>
  )
}
