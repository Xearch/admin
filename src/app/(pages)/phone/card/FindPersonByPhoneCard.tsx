import { NotFoundRegister } from '@/src/components/form'
import { IconToCopyText } from '@/src/components/IconToCopyText'
import { IconToSearch } from '@/src/components/IconToSearch'
import classes from '@/src/global/style/Cards.module.css'
import { FindPersonByPhoneType } from '@/src/services/types'
import { Card, Container, Flex, rem, SimpleGrid, Text } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'

type CardPros = {
  data: FindPersonByPhoneType | null
}
export function FindPersonByPhoneCard({ data }: CardPros) {
  if (data?.data?.length === 0) return <NotFoundRegister />
  return (
    <Container size="lg" py="xl" className={classes.container}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
        {data?.data &&
          data?.data?.length > 0 &&
          data?.data?.map(person => {
            return (
              <Card key={person.cpf} shadow="md" radius="md" className={classes.card} padding="xl">
                <IconUser style={{ width: rem(30), height: rem(30) }} stroke={2} color="#1E90FF" />

                {person.nome && (
                  <Flex mt="md">
                    <IconToCopyText text={person.nome} />
                    <Text mx="5" className={classes.cardTitle}>
                      Nome:
                    </Text>
                    <Text className={classes.cardTitle}>{person.nome}</Text>
                  </Flex>
                )}

                {person.cpf && (
                  <Flex>
                    <IconToSearch params={{ param_name: 'cpf', param_value: person.cpf, url: '/cpf' }} />
                    <Text mx="5" className={classes.cardTitle}>
                      CPF:
                    </Text>
                    <Text className={classes.cardTitle}>{person.cpf}</Text>
                  </Flex>
                )}

                {person.telefone && (
                  <Flex>
                    <IconToCopyText text={person.telefone} />
                    <Text mx="5" className={classes.cardTitle}>
                      Telefone:
                    </Text>
                    <Text className={classes.cardTitle}>{person.telefone}</Text>
                  </Flex>
                )}
              </Card>
            )
          })}
      </SimpleGrid>
    </Container>
  )
}
