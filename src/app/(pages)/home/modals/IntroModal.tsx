'use client'

import { useScroll } from '@/src/hooks/useScroll'
import { useGetUserProfile } from '@/src/services/endpoints/getUserProfile'
import { Flex, Modal, ScrollArea, Tabs, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconXboxX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

import { PoliticsModalContent } from './politics-modal/Content'
import { TermsModalContent } from './terms-modal/Content'

export function IntroModal() {
  const { scrollToTop, viewportRef } = useScroll()
  const [tabIndex, setTabIndex] = useState('1')
  const { data: userProfile } = useGetUserProfile()
  const [opened, { open, close }] = useDisclosure(false)

  useEffect(() => {
    open()
  }, [open])

  return (
    <>
      {userProfile && (
        <Modal
          size={1000}
          opened={opened}
          onClose={() => {}}
          title="Termos de Uso e Políticas de privacidade"
          closeButtonProps={<IconXboxX size={20} stroke={1.5} />}
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
        >
          <Tabs color="red" defaultValue={tabIndex} value={tabIndex}>
            <Tabs.List>
              <Tabs.Tab value="1" disabled>
                Termos de Uso
              </Tabs.Tab>
              <Tabs.Tab value="2" color="red" disabled>
                Políticas de privacidade
              </Tabs.Tab>
            </Tabs.List>

            <ScrollArea h="400" viewportRef={viewportRef}>
              <Tabs.Panel value="1" pt="xs">
                <Flex justify="center" align="center" direction="column">
                  <Title mb={10}>Termos de Uso</Title>
                  <TermsModalContent
                    onAction={() => {
                      setTabIndex('2')
                      scrollToTop(4)
                    }}
                  />
                </Flex>
              </Tabs.Panel>

              <Tabs.Panel value="2" pt="xs">
                <Flex justify="center" align="center" direction="column">
                  <Title mb={10}>Políticas de privacidade</Title>
                  <PoliticsModalContent onAction={close} />
                </Flex>
              </Tabs.Panel>
            </ScrollArea>
          </Tabs>
        </Modal>
      )}
    </>
  )
}
