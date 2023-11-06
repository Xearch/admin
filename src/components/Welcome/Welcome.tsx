import { Title, Text } from '@mantine/core'

import classes from './Welcome.module.css'

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center">
        <Text inherit component="span">
          Bem vindo
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        No Xearch, sua Consulta por informações precisas e rápidas está prestes a ser transformada. Somos o seu
        destino confiável para pesquisas detalhadas utilizando uma variedade de documentos, como CPF, placa de
        veículo, RG, Cartão do SUS, e muito mais. Nosso serviço intuitivo e seguro permite que você acesse
        informações cruciais de maneira eficiente e confiável. Quer esteja procurando por detalhes sobre um
        indivíduo, verificando a autenticidade de documentos ou simplesmente buscando por informações
        essenciais, o Xearch é a sua solução abrangente.
      </Text>
    </>
  )
}
