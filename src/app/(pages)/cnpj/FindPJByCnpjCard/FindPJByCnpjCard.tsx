import { IconToCopyText } from '@/src/components/IconToCopyText'
import classes from '@/src/global/style/Cards.module.css'
import { CnpjResponse } from '@/src/services/types'
import { Text, Card, SimpleGrid, Container, Flex, Skeleton, Divider, Title } from '@mantine/core'

type CardPros = {
  person: CnpjResponse
}

export function SkeletonCnpjCard() {
  return (
    <Container size="lg" py="xl" className={classes.container}>
      <SimpleGrid cols={{ base: 1, md: 1 }} spacing="md">
        <Card shadow="md" radius="md" className={classes.card} padding="xl">
          <Flex mt="md">
            <Skeleton height={15} mt={6} radius="xl" />
            <Skeleton height={15} mt={6} radius="xl" />
          </Flex>

          <Flex>
            <Skeleton height={15} mt={6} radius="xl" /> <Skeleton height={15} mt={6} radius="xl" />
          </Flex>

          <Flex>
            <Skeleton height={15} mt={6} radius="xl" /> <Skeleton height={15} mt={6} radius="xl" />
          </Flex>

          <Flex>
            <Skeleton height={15} mt={6} radius="xl" /> <Skeleton height={15} mt={6} radius="xl" />
          </Flex>

          <Flex>
            <Skeleton height={15} mt={6} radius="xl" /> <Skeleton height={15} mt={6} radius="xl" />
          </Flex>

          <Flex>
            <Skeleton height={15} mt={6} radius="xl" /> <Skeleton height={15} mt={6} radius="xl" />
          </Flex>
        </Card>
      </SimpleGrid>
    </Container>
  )
}

export function FindPJByCnpjCard({ person }: CardPros) {
  return (
    <Container size="lg" py="xl" className={classes.container}>
      <Card shadow="md" radius="md" className={classes.card} padding="xl">
        {/* DADOS PRINCIPAIS */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title ta="center">DADOS PRINCIPAIS</Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
          {person.nome && (
            <Flex mt="md">
              <IconToCopyText text={person.nome} />
              <Text mx="5" className={classes.cardTitle}>
                Nome:
              </Text>
              <Text className={classes.cardTitle}>{person.nome}</Text>
            </Flex>
          )}

          {person.fantasia && (
            <Flex mt="md">
              <IconToCopyText text={person.fantasia} />
              <Text mx="5" className={classes.cardTitle}>
                Nome fantasia:
              </Text>
              <Text className={classes.cardTitle}>{person.fantasia}</Text>
            </Flex>
          )}

          {person.abertura && (
            <Flex mt="md">
              <IconToCopyText text={person.abertura} />
              <Text mx="5" className={classes.cardTitle}>
                Abertura:
              </Text>
              <Text className={classes.cardTitle}>{person.abertura}</Text>
            </Flex>
          )}

          {person.situacao && (
            <Flex mt="md">
              <IconToCopyText text={person.situacao} />
              <Text mx="5" className={classes.cardTitle}>
                Situação:
              </Text>
              <Text className={classes.cardTitle}>{person.situacao}</Text>
            </Flex>
          )}

          {person.motivo_situacao && (
            <Flex mt="md">
              <IconToCopyText text={person.motivo_situacao} />
              <Text mx="5" className={classes.cardTitle}>
                Motivo situação:
              </Text>
              <Text className={classes.cardTitle}>{person.motivo_situacao}</Text>
            </Flex>
          )}

          {person.situacao_especial && (
            <Flex mt="md">
              <IconToCopyText text={person.situacao_especial} />
              <Text mx="5" className={classes.cardTitle}>
                Situação especial:
              </Text>
              <Text className={classes.cardTitle}>{person.situacao_especial}</Text>
            </Flex>
          )}

          {person.data_situacao_especial && (
            <Flex mt="md">
              <IconToCopyText text={person.data_situacao_especial} />
              <Text mx="5" className={classes.cardTitle}>
                Data situação especial:
              </Text>
              <Text className={classes.cardTitle}>{person.data_situacao_especial}</Text>
            </Flex>
          )}

          {person.efr && (
            <Flex mt="md">
              <IconToCopyText text={person.efr} />
              <Text mx="5" className={classes.cardTitle}>
                EFR:
              </Text>
              <Text className={classes.cardTitle}>{person.efr}</Text>
            </Flex>
          )}

          {person.status && (
            <Flex mt="md">
              <IconToCopyText text={person.status} />
              <Text mx="5" className={classes.cardTitle}>
                Status:
              </Text>
              <Text className={classes.cardTitle}>{person.status}</Text>
            </Flex>
          )}

          {person.ultima_atualizacao && (
            <Flex mt="md">
              <IconToCopyText text={person.ultima_atualizacao} />
              <Text mx="5" className={classes.cardTitle}>
                Última atualização:
              </Text>
              <Text className={classes.cardTitle}>{person.ultima_atualizacao}</Text>
            </Flex>
          )}

          {person.tipo && (
            <Flex mt="md">
              <IconToCopyText text={person.tipo} />
              <Text mx="5" className={classes.cardTitle}>
                Tipo:
              </Text>
              <Text className={classes.cardTitle}>{person.tipo}</Text>
            </Flex>
          )}

          {person.porte && (
            <Flex mt="md">
              <IconToCopyText text={person.porte} />
              <Text mx="5" className={classes.cardTitle}>
                Porte:
              </Text>
              <Text className={classes.cardTitle}>{person.porte}</Text>
            </Flex>
          )}

          {person.natureza_juridica && (
            <Flex mt="md">
              <IconToCopyText text={person.natureza_juridica} />
              <Text mx="5" className={classes.cardTitle}>
                Natureza jurídica:
              </Text>
              <Text className={classes.cardTitle}>{person.natureza_juridica}</Text>
            </Flex>
          )}

          {person.natureza_juridica && (
            <Flex mt="md">
              <IconToCopyText text={person.natureza_juridica} />
              <Text mx="5" className={classes.cardTitle}>
                Natureza jurídica:
              </Text>
              <Text className={classes.cardTitle}>{person.natureza_juridica}</Text>
            </Flex>
          )}

          {person.capital_social && (
            <Flex mt="md">
              <IconToCopyText text={person.capital_social} />
              <Text mx="5" className={classes.cardTitle}>
                Capital social:
              </Text>
              <Text className={classes.cardTitle}>{person.capital_social}</Text>
            </Flex>
          )}

          {person.telefone && (
            <Flex mt="md">
              <IconToCopyText text={person.telefone} />
              <Text mx="5" className={classes.cardTitle}>
                Telefone:
              </Text>
              <Text className={classes.cardTitle}>{person.telefone}</Text>
            </Flex>
          )}

          {person.email && (
            <Flex mt="md">
              <IconToCopyText text={person.email} />
              <Text mx="5" className={classes.cardTitle}>
                Email:
              </Text>
              <Text className={classes.cardTitle}>{person.email}</Text>
            </Flex>
          )}
        </SimpleGrid>

        {/* ATUAÇÃO */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title ta="center">ATUAÇÃO</Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
          {person.atividade_principal &&
            person.atividade_principal.length > 0 &&
            person.atividade_principal.map(ap => {
              return (
                <Flex mt="md" key={ap.code}>
                  <IconToCopyText text={ap.text} />
                  <Text mx="5" className={classes.cardTitle}>
                    Atividade:
                  </Text>
                  <Text className={classes.cardTitle}>{ap.text}</Text>
                </Flex>
              )
            })}
        </SimpleGrid>

        {/* ENDEREÇO */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title ta="center">ENDEREÇO</Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
          {person.cep && (
            <Flex mt="md">
              <IconToCopyText text={person.cep} />
              <Text mx="5" className={classes.cardTitle}>
                CEP:
              </Text>
              <Text className={classes.cardTitle}>{person.cep}</Text>
            </Flex>
          )}

          {person.uf && (
            <Flex mt="md">
              <IconToCopyText text={person.uf} />
              <Text mx="5" className={classes.cardTitle}>
                UF:
              </Text>
              <Text className={classes.cardTitle}>{person.uf}</Text>
            </Flex>
          )}

          {person.municipio && (
            <Flex mt="md">
              <IconToCopyText text={person.municipio} />
              <Text mx="5" className={classes.cardTitle}>
                Municipio:
              </Text>
              <Text className={classes.cardTitle}>{person.municipio}</Text>
            </Flex>
          )}

          {person.bairro && (
            <Flex mt="md">
              <IconToCopyText text={person.bairro} />
              <Text mx="5" className={classes.cardTitle}>
                Bairro:
              </Text>
              <Text className={classes.cardTitle}>{person.bairro}</Text>
            </Flex>
          )}

          {person.complemento && (
            <Flex mt="md">
              <IconToCopyText text={person.complemento} />
              <Text mx="5" className={classes.cardTitle}>
                Complemento:
              </Text>
              <Text className={classes.cardTitle}>{person.complemento}</Text>
            </Flex>
          )}

          {person.logradouro && (
            <Flex mt="md">
              <IconToCopyText text={person.logradouro} />
              <Text mx="5" className={classes.cardTitle}>
                Logradouro:
              </Text>
              <Text className={classes.cardTitle}>{person.logradouro}</Text>
            </Flex>
          )}

          {person.numero && (
            <Flex mt="md">
              <IconToCopyText text={person.numero} />
              <Text mx="5" className={classes.cardTitle}>
                Número:
              </Text>
              <Text className={classes.cardTitle}>{person.numero}</Text>
            </Flex>
          )}
        </SimpleGrid>

        {/* ATIVIDADES SECUNDARIAS */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title ta="center">ATIVIDADES SECUNDARIAS</Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
          {person.atividades_secundarias &&
            person.atividades_secundarias.length > 0 &&
            person.atividades_secundarias.map(as => {
              return (
                <Flex mt="md" key={as.code}>
                  <IconToCopyText text={as.text} />
                  <Text mx="5" className={classes.cardTitle}>
                    Atividade:
                  </Text>
                  <Text className={classes.cardTitle}>{as.text}</Text>
                </Flex>
              )
            })}
        </SimpleGrid>
      </Card>
    </Container>
  )
}
