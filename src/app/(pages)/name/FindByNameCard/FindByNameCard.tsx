import { IconToCopyText } from '@/src/components/IconToCopyText'
import classes from '@/src/global/style/Cards.module.css'
import { FindByNameType } from '@/src/services/types'
import { Text, Card, SimpleGrid, Container, rem, Flex, Skeleton } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'

type CardPros = {
  people: FindByNameType
}

export function CardSkeleton() {
  const person = [1, 2, 3, 4]
  return (
    <Container size="lg" py="xl" className={classes.container}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
        {person.map(() => {
          return (
            <Card shadow="md" radius="md" className={classes.card} padding="xl">
              <IconUser style={{ width: rem(30), height: rem(30) }} stroke={2} color="gray" />
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
          )
        })}
      </SimpleGrid>
    </Container>
  )
}

export function FindByNameCard({ people }: CardPros) {
  return (
    <Container size="lg" py="xl" className={classes.container}>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
        {people?.data?.map(person => {
          return (
            <Card key={person.cpf} shadow="md" radius="md" className={classes.card} padding="xl">
              <IconUser style={{ width: rem(30), height: rem(30) }} stroke={2} color="#1E90FF" />
              <Flex mt="md">
                <IconToCopyText text={person.nome} />
                <Text mx="5" className={classes.cardTitle}>
                  Nome:
                </Text>
                <Text className={classes.cardTitle}>{person.nome}</Text>
              </Flex>

              <Flex>
                <IconToCopyText text={person.idade} />
                <Text mx="5" className={classes.cardTitle}>
                  Idate:
                </Text>
                <Text className={classes.cardTitle}>{person.idade}</Text>
              </Flex>

              <Flex>
                <IconToCopyText text={person.cpf} />
                <Text mx="5" className={classes.cardTitle}>
                  CPF:
                </Text>
                <Text className={classes.cardTitle}>{person.cpf}</Text>
              </Flex>

              <Flex>
                <IconToCopyText text={person.nomeMae} />
                <Text mx="5" className={classes.cardTitle}>
                  Mãe:
                </Text>
                <Text className={classes.cardTitle}>{person.nomeMae}</Text>
              </Flex>
            </Card>
          )
        })}
      </SimpleGrid>
    </Container>
  )
}
