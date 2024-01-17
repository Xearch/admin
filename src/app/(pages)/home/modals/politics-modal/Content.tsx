'use client'

import { Checkbox, Divider, Flex, ModalBaseBody, Text, Title } from '@mantine/core'

type Props = {
  onAction: () => void
}
export function PoliticsModalContent({ onAction }: Props) {
  return (
    <>
      <Flex justify="center">
        <Title fz="lg">Coleta e Uso de Informações Pessoais</Title>
      </Flex>
      <Text>
        Ao utilizar os serviços da Xearch, coletamos informações técnicas limitadas, como logs de servidor e
        dados de uso. Não coletamos dados pessoais identificáveis através das consultas realizadas. As
        informações coletadas são usadas para otimizar a performance dos serviços e garantir a segurança do
        sistema.
      </Text>

      <Flex justify="center">
        <Title fz="lg">Armazenamento de Dados</Title>
      </Flex>
      <Text>
        A Xearch não armazena os dados resultantes de consultas realizadas pelos usuários. Registramos
        informações de log, incluindo detalhes técnicos das consultas, como endpoint, horário e usuário que
        fez a consulta. Esses logs são mantidos para fins operacionais e de segurança, sem associar os
        resultados específicos das consultas aos usuários.
      </Text>

      <Flex justify="center">
        <Title fz="lg">Compartilhamento de Dados</Title>
      </Flex>
      <Text>
        Não compartilhamos informações pessoais identificáveis com terceiros, exceto quando exigido por lei ou
        autorizado pelo usuário. Os logs de consultas podem ser usados internamente para melhorar os serviços,
        mas não são compartilhados de forma que permita a identificação dos usuários.
      </Text>

      <Flex justify="center">
        <Title fz="lg">Cookies e Tecnologias Semelhantes</Title>
      </Flex>
      <Text>
        A Xearch utiliza cookies e tecnologias similares para melhorar a experiência do usuário. Os usuários
        podem gerenciar as configurações de cookies em seus navegadores, mas a desativação pode afetar a
        funcionalidade dos Serviços.
      </Text>

      <Flex justify="center">
        <Title fz="lg">Segurança</Title>
      </Flex>
      <Text>
        Implementamos medidas de segurança para proteger as informações coletadas contra acesso não
        autorizado, alteração, divulgação ou destruição. No entanto, nenhum sistema é completamente seguro, e
        a Xearch não pode garantir a segurança absoluta dos dados.
      </Text>

      <Flex justify="center">
        <Title fz="lg">Acesso e Controle de Dados Pessoais</Title>
      </Flex>
      <Text>
        Os usuários têm o direito de acessar, corrigir ou excluir seus dados pessoais, conforme permitido por
        lei. Para solicitações relacionadas à privacidade, entre em contato conosco através dos meios
        fornecidos no site da Xearch.
      </Text>

      <Flex justify="center">
        <Title fz="lg">Alterações nesta Política</Title>
      </Flex>
      <Text>
        A Xearch reserva-se o direito de modificar esta Política de Privacidade a qualquer momento. As
        alterações serão comunicadas aos usuários por meio do site ou por outros meios apropriados. O uso
        continuado dos Serviços após as alterações constitui aceitação das novas práticas de privacidade.
      </Text>

      <Divider my="md" />
      <ModalBaseBody mt="md">
        <Flex justify="center">
          <Title fz="lg">Lei Aplicável</Title>
        </Flex>
        <Text>
          Esta Política de Privacidade será regida e interpretada de acordo com as leis do Brasil. Qualquer
          disputa decorrente ou relacionada a esta Política de Privacidade será submetida à jurisdição
          exclusiva dos tribunais do Brasil.
        </Text>

        <Title fz="lg" mt={10}>
          Última Atualização: 02/01/2023
        </Title>
        <Text>
          Recomendamos a revisão periódica desta política para manter-se informado sobre nossas práticas de
          privacidade.
        </Text>
        <Checkbox
          mt={10}
          label="Ao utilizar os serviços da Xearch, os usuários concordam com os termos estabelecidos nesta
            Política de Privacidade."
          onChange={() => onAction()}
        />
      </ModalBaseBody>
    </>
  )
}
