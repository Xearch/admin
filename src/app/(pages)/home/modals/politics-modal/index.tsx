'use client'

import { Button, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconXboxX } from '@tabler/icons-react'

import { PoliticsModalContent } from './Content'

export function PoliticsModal() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal
        size={1000}
        opened={opened}
        onClose={close}
        title="Políticas de privacidade"
        closeButtonProps={<IconXboxX size={20} stroke={1.5} />}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <PoliticsModalContent onAction={close} />
      </Modal>

      <Button onClick={open}>Políticas de privacidade</Button>
    </>
  )
}
