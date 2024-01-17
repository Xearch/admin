/* eslint-disable react/no-unescaped-entities */

'use client'

import { Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconXboxX } from '@tabler/icons-react'

import { TermsModalContent } from './Content'

export function TermsModal() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal
        size={1000}
        opened={opened}
        onClose={close}
        title="Termos de Uso"
        closeButtonProps={<IconXboxX size={20} stroke={1.5} />}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <TermsModalContent onAction={close} />
      </Modal>

      <Button onClick={open}>Termos de uso</Button>
    </>
  )
}
