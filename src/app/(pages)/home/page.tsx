import { PoliticsModal } from '@/src/app/(pages)/home/modals/politics-modal'
import { TermsModal } from '@/src/app/(pages)/home/modals/terms-modal'
import classes from '@/src/global/style/Cards.module.css'
import Layout from '@/src/Layout/index'
import { Card, Flex, Title } from '@mantine/core'

import { IntroModal } from './modals/IntroModal'

export const metadata = {
  title: 'Perfil',
}

export default function Profile() {
  return (
    <Layout>
      <Card shadow="md" radius="md" w="100%" py="xl">
        <Flex align="center" justify="center" direction="column">
          <Title className={classes.title}>Bem vindo ao Xearch</Title>
          <h2 className={classes.h2}>
            Sua porta de entrada para uma experiência única e inovadora! Explore conosco as infinitas
            possibilidades de busca, descoberta e conexão. Navegue com confiança, pois valorizamos a sua
            privacidade e transparência. Antes de começar essa jornada emocionante, convidamos você a conhecer
            nossos termos de uso e políticas de privacidade abaixo. Estamos aqui para transformar a maneira
            como você interage e descobre informações online. Embarque conosco nessa jornada digital!
          </h2>
        </Flex>

        <Flex align="center" justify="center" gap={10}>
          <IntroModal />
          <TermsModal />
          <PoliticsModal />
        </Flex>
      </Card>
    </Layout>
  )
}
