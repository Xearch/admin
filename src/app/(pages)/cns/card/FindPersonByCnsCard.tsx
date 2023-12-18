import { IconToCopyText } from '@/src/components/IconToCopyText'
import classes from '@/src/global/style/Cards.module.css'
import { FindPersonByCnsType } from '@/src/services/types'
import { Card, Container, Divider, Flex, SimpleGrid, Text, Title } from '@mantine/core'

type CardPros = {
  data: FindPersonByCnsType
}
export function FindPersonByCnsCard({ data }: CardPros) {
  return (
    <Container size="lg" py="xl" className={classes.container}>
      <Card shadow="md" radius="md" className={classes.card} padding="xl">
        <Flex mt="md">
          <Text mx="5" className={classes.cardTitle}>
            Consultado em:
          </Text>
          <Text className={classes.cardContent}>{data.data.created_at}</Text>
        </Flex>

        {/* DADOS PRINCIPAIS */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title ta="center">DADOS PRINCIPAIS</Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="1">
          <Flex mt="md">
            <IconToCopyText text={data.data.cadsus.nome} />
            <Text mx="5" className={classes.cardTitle}>
              Nome:
            </Text>
            <Text className={classes.cardContent}>{data.data.cadsus.nome}</Text>
          </Flex>

          <Flex mt="md">
            <IconToCopyText text={data.data.cadsus.cpf} />
            <Text mx="5" className={classes.cardTitle}>
              CPF:
            </Text>
            <Text className={classes.cardContent}>{data.data.cadsus.cpf}</Text>
          </Flex>

          <Flex mt="md">
            <IconToCopyText text={data.data.cadsus.data_nascimento} />
            <Text mx="5" className={classes.cardTitle}>
              Nascimento:
            </Text>
            <Text className={classes.cardContent}>{data.data.cadsus.data_nascimento}</Text>
          </Flex>

          <Flex mt="md">
            <IconToCopyText text={data.data.cadsus.idade} />
            <Text mx="5" className={classes.cardTitle}>
              Idade:
            </Text>
            <Text className={classes.cardContent}>{data.data.cadsus.idade}</Text>
          </Flex>

          <Flex mt="md">
            <IconToCopyText text={data.data.cadsus.cns} />
            <Text mx="5" className={classes.cardTitle}>
              Cartão do SUS:
            </Text>
            <Text className={classes.cardContent}>{data.data.cadsus.cns}</Text>
          </Flex>

          <Flex mt="md">
            <Text mx="5" className={classes.cardTitle}>
              Sexo:
            </Text>
            <Text className={classes.cardContent}>{data.data.cadsus.sexo}</Text>
          </Flex>

          <Flex mt="md">
            <IconToCopyText text={data.data.cadsus.mae} />
            <Text mx="5" className={classes.cardTitle}>
              Mãe:
            </Text>
            <Text className={classes.cardContent}>{data.data.cadsus.mae}</Text>
          </Flex>

          <Flex mt="md">
            <IconToCopyText text={data.data.cadsus.pai} />
            <Text mx="5" className={classes.cardTitle}>
              Pai:
            </Text>
            <Text className={classes.cardContent}>{data.data.cadsus.pai}</Text>
          </Flex>

          <Flex mt="md">
            <IconToCopyText text={data.data.cadsus.codigo_raca_cor} />
            <Text mx="5" className={classes.cardTitle}>
              Cor:
            </Text>
            <Text className={classes.cardContent}>{data.data.cadsus.codigo_raca_cor}</Text>
          </Flex>

          <Flex mt="md">
            <IconToCopyText text={data.data.cadsus.nome_pais} />
            <Text mx="5" className={classes.cardTitle}>
              Nacionalidade:
            </Text>
            <Text className={classes.cardContent}>{data.data.cadsus.nome_pais}</Text>
          </Flex>

          <Flex mt="md">
            <IconToCopyText text={data.data.cadsus.telefone} />
            <Text mx="5" className={classes.cardTitle}>
              Telefone:
            </Text>
            <Text className={classes.cardContent}>{data.data.cadsus.telefone}</Text>
          </Flex>
        </SimpleGrid>

        {/* ENDEREÇO */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title ta="center">ENDEREÇO</Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="1">
          {data.data.cadsus.cep && (
            <Flex mt="md">
              <IconToCopyText text={data.data.cadsus.cep} />
              <Text mx="5" className={classes.cardTitle}>
                CEP:
              </Text>
              <Text className={classes.cardContent}>{data.data.cadsus.cep}</Text>
            </Flex>
          )}

          {data.data.cadsus.estado_nome && (
            <Flex mt="md">
              <IconToCopyText text={data.data.cadsus.estado_nome} />
              <Text mx="5" className={classes.cardTitle}>
                UF:
              </Text>
              <Text className={classes.cardContent}>{data.data.cadsus.estado_nome}</Text>
            </Flex>
          )}

          {data.data.cadsus.cidade_nome && (
            <Flex mt="md">
              <IconToCopyText text={data.data.cadsus.cidade_nome} />
              <Text mx="5" className={classes.cardTitle}>
                Cidade:
              </Text>
              <Text className={classes.cardContent}>{data.data.cadsus.cidade_nome}</Text>
            </Flex>
          )}

          {data.data.cadsus.logradouro && (
            <Flex mt="md">
              <IconToCopyText text={data.data.cadsus.logradouro} />
              <Text mx="5" className={classes.cardTitle}>
                Logradouro:
              </Text>
              <Text className={classes.cardContent}>{data.data.cadsus.logradouro}</Text>
            </Flex>
          )}

          {data.data.cadsus.numero && (
            <Flex mt="md">
              <IconToCopyText text={data.data.cadsus.numero} />
              <Text mx="5" className={classes.cardTitle}>
                Número:
              </Text>
              <Text className={classes.cardContent}>{data.data.cadsus.numero}</Text>
            </Flex>
          )}

          {data.data.cadsus.bairro && (
            <Flex mt="md">
              <IconToCopyText text={data.data.cadsus.bairro} />
              <Text mx="5" className={classes.cardTitle}>
                Bairro:
              </Text>
              <Text className={classes.cardContent}>{data.data.cadsus.bairro}</Text>
            </Flex>
          )}
        </SimpleGrid>
      </Card>
    </Container>
  )
}
