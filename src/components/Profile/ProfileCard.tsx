/* eslint-disable no-unsafe-optional-chaining */
import classes from '@/src/global/style/Cards.module.css'
import { UserProfileType } from '@/src/services/types'
import { Card, Divider, Flex, SimpleGrid, Text, Title } from '@mantine/core'

import { IconToCopyText } from '../IconToCopyText'

type CardPros = {
  data: UserProfileType
}
export function ProfileCard({ data }: CardPros) {
  return (
    <Card shadow="md" radius="md" className={classes.card} padding="xl" w="100%">
      <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
        <Title className={classes.title} ta="center">
          DADOS DO PERFIL
        </Title>
      </SimpleGrid>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="1">
        {data.user.name && (
          <Flex mt="md">
            <Text mx="5" className={classes.cardTitle}>
              Nome:
            </Text>
            <Text className={classes.cardContent}>{data.user.name}</Text>
          </Flex>
        )}

        {data.user.email && (
          <Flex mt="md">
            <Text mx="5" className={classes.cardTitle}>
              Email:
            </Text>
            <Text className={classes.cardContent}>{data.user.email}</Text>
          </Flex>
        )}

        {data.user.cpf && (
          <Flex mt="md">
            <Text mx="5" className={classes.cardTitle}>
              CPF:
            </Text>
            <Text className={classes.cardContent}>{data.user.cpf}</Text>
          </Flex>
        )}

        {data.user && (
          <Flex mt="md">
            <Text mx="5" className={classes.cardTitle}>
              Status:
            </Text>
            <Text className={classes.cardContent}>{data.user.active ? 'Ativo' : 'Inativo'}</Text>
          </Flex>
        )}
      </SimpleGrid>

      {/* CHAVES DE ACESSO */}
      {data.user.keys && data.user.keys.length > 0 && (
        <>
          <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
            <Title className={classes.title} ta="center">
              CHAVES DE ACESSO
            </Title>
          </SimpleGrid>

          <Divider mt="md" mb={20} />

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="1">
            {data.user.keys.map(i => (
              <>
                <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1" key={i.id}>
                  <Title className={classes.h2} ta="center">
                    CHAVE {data.user.keys && data.user.keys.length > 0 && data?.user?.keys?.indexOf(i) + 1}
                  </Title>
                  {i.key && (
                    <Flex mt="md">
                      <IconToCopyText text={i.key} />
                      <Text mx="5" className={classes.cardTitle}>
                        Chave:
                      </Text>
                      <Text className={classes.cardContent}>{i.key}</Text>
                    </Flex>
                  )}

                  {i.created_at && (
                    <Flex mt="md">
                      <IconToCopyText text={i.created_at} />
                      <Text mx="5" className={classes.cardTitle}>
                        Data de criação:
                      </Text>
                      <Text className={classes.cardContent}>{i.created_at}</Text>
                    </Flex>
                  )}
                </SimpleGrid>
              </>
            ))}
          </SimpleGrid>
        </>
      )}
    </Card>
  )
}
