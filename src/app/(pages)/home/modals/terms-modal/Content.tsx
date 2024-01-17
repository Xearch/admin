/* eslint-disable react/no-unescaped-entities */

'use client'

import { Checkbox, Divider, Flex, ModalBaseBody, Text, Title } from '@mantine/core'

type Props = {
  onAction: () => void
}
export function TermsModalContent({ onAction }: Props) {
  return (
    <>
      <Flex justify="center">
        <Title fz="lg">1. Introdução</Title>
      </Flex>
      <Text>
        Bem-vindo à Xearch, uma plataforma comprometida em proteger a segurança e a privacidade dos dados de
        nossos usuários, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD) nº 13.709,
        aprovada em agosto de 2018. Estes Termos de Uso ("Termos") regulam o acesso e o uso dos serviços
        oferecidos pela Xearch ("Empresa", "nós" ou "nosso") por meio de nosso site, aplicativos e outras
        plataformas online (coletivamente, os "Serviços"). Ao utilizar os Serviços, os usuários ("você", "seu"
        ou "usuário") concordam em cumprir e ficar vinculados por estes Termos. Leia atentamente os Termos
        antes de utilizar os Serviços.
      </Text>

      <Flex justify="center">
        <Title fz="lg">2. Uso Permitido</Title>
      </Flex>
      <Text>
        Os Serviços destinam-se exclusivamente ao uso pessoal e não comercial. Os usuários não podem
        reproduzir, duplicar, copiar, vender, revender ou explorar qualquer parte dos Serviços para fins
        comerciais sem o consentimento prévio por escrito da Xearch. O uso dos Serviços é de responsabilidade
        exclusiva do usuário.
      </Text>

      <Flex justify="center">
        <Title fz="lg">3. Conta do Usuário</Title>
      </Flex>
      <Text>
        Para utilizar determinados Serviços, os usuários precisam criar uma conta de usuário. É
        responsabilidade dos usuários manter a confidencialidade de suas informações de login e de todas as
        atividades que ocorrem em sua conta. Os usuários concordam em notificar imediatamente a Xearch sobre
        qualquer uso não autorizado de sua conta ou qualquer outra violação de segurança. A Xearch não será
        responsável por quaisquer perdas ou danos decorrentes do uso não autorizado de uma conta.
      </Text>

      <Flex justify="center">
        <Title fz="lg">4. Política de Armazenamento de Dados</Title>
      </Flex>
      <Text>
        A Xearch não armazena os dados resultantes de cada consulta realizada por meio de nossos Serviços. Em
        vez disso, apenas registramos informações de log relacionadas a quando e qual endpoint da consulta foi
        realizada, informações do usuário que fez a consulta e outros dados de natureza técnica necessários
        para o funcionamento adequado dos Serviços. A privacidade e a segurança dos dados dos usuários são
        fundamentais para nós.
      </Text>

      <Flex justify="center">
        <Title fz="lg">5. Legislação Pertinente</Title>
      </Flex>
      <Text>
        A Xearch observa a legislação brasileira, incluindo a Lei de Acesso à Informação (Lei 12.527, de 18 de
        novembro de 2011), que introduziu o conceito de transparência ativa no Brasil. Além disso, documentos
        como o Decreto n º 7.724, de 16 de maio de 2012, que obriga a publicação do salário dos servidores e
        empregados, e a Portaria Interministerial 233 de 25 de maio de 2012, que regulamentou a atividade, são
        considerados em nossas práticas operacionais.
      </Text>

      <Flex justify="center">
        <Title fz="lg">6. Propriedade Intelectual</Title>
      </Flex>
      <Text>
        Os Serviços e todo o conteúdo e materiais relacionados são de propriedade exclusiva da Xearch ou de
        seus licenciadores e estão protegidos pelas leis de direitos autorais, marcas registradas e outras
        leis de propriedade intelectual. Os usuários não podem usar, copiar ou distribuir qualquer parte dos
        Serviços ou do conteúdo relacionado sem o consentimento prévio por escrito da Xearch.
      </Text>

      <Flex justify="center">
        <Title fz="lg">7. Limitação de Responsabilidade</Title>
      </Flex>
      <Text>
        A Xearch não será responsável por quaisquer danos diretos, indiretos, incidentals, especiais,
        consequenciais ou punitivos decorrentes do uso ou incapacidade de uso dos Serviços, incluindo, mas não
        se limitando a, perda de lucros, perda de dados ou interrupção de negócios, mesmo que a Xearch tenha
        sido avisada da possibilidade de tais danos. A Xearch não será responsável por danos ou prejuízos
        decorrentes de qualquer violação de segurança ou invasão de privacidade que afete os usuários.
      </Text>

      <Flex justify="center">
        <Title fz="lg">8. Alterações nos Termos</Title>
      </Flex>
      <Text>
        A Xearch reserva-se o direito de alterar estes Termos a qualquer momento, a seu exclusivo critério. Os
        usuários serão notificados de quaisquer alterações nos Termos por meio de uma notificação no site ou
        por e-mail. O uso continuado dos Serviços após a notificação de alterações nos Termos constitui
        aceitação dos Termos alterados.
      </Text>

      <Flex justify="center">
        <Title fz="lg">9. Rescisão</Title>
      </Flex>
      <Text>
        A Xearch reserva-se o direito de rescindir ou suspender o acesso dos usuários aos Serviços a qualquer
        momento, por qualquer motivo, com ou sem aviso prévio. Os usuários podem rescindir sua conta a
        qualquer momento, entrando em contato com a Xearch.
      </Text>

      <Flex justify="center">
        <Title fz="lg">10. Indenização</Title>
      </Flex>
      <Text>
        Os usuários concordam em indenizar e isentar a Xearch, seus afiliados, diretores, funcionários e
        agentes de qualquer reivindicação, responsabilidade, dano, perda ou despesa, incluindo, mas não se
        limitando a, honorários advocatícios razoáveis, resultantes ou relacionados ao seu uso dos Serviços ou
        violação destes Termos.
      </Text>

      <Divider my="md" />
      <ModalBaseBody mt="md">
        <Flex justify="center">
          <Title fz="lg">Lei Aplicável</Title>
        </Flex>
        <Text>
          Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem levar em
          consideração os conflitos de disposições legais. Qualquer disputa decorrente ou relacionada a estes
          Termos será submetida à jurisdição exclusiva dos tribunais do Brasil.
        </Text>
        <Checkbox
          mt={10}
          label="Ao aceitar esses Termos e Condições, o usuário compreende e concorda que é o único e exclusivo responsável por qualquer consequência legal, jurídica, civil ou de qualquer outra natureza, resultante do mau uso dos serviços oferecidos pela plataforma. Ao utilizar nossos serviços, o usuário se compromete a respeitar todas as leis e regulamentações aplicáveis."
          onChange={() => onAction()}
        />
      </ModalBaseBody>
    </>
  )
}
