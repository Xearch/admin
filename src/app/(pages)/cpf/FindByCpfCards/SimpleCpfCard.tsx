import { IconToCopyText } from '@/src/components/IconToCopyText'
import classes from '@/src/global/style/Cards.module.css'
import { FindSimpleCpfType } from '@/src/services/types'
import { Text, Card, SimpleGrid, Container, Flex } from '@mantine/core'

type CardPros = {
  data: FindSimpleCpfType
}
export function SimpleCpfCard({ data }: CardPros) {
  return (
    <Container size="lg" py="xl" className={classes.container}>
      <SimpleGrid cols={{ base: 1, md: 1 }} spacing="md">
        <Card shadow="md" radius="md" className={classes.card} padding="xl">
          <Flex mt="md">
            <Text mx="5" className={classes.cardTitle}>
              Consultado em:
            </Text>
            <Text className={classes.cardContent}>{data.data.dataConsulta}</Text>
          </Flex>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="1">
            <Flex mt="md">
              <IconToCopyText text={data.data.nome} />
              <Text mx="5" className={classes.cardTitle}>
                Nome:
              </Text>
              <Text className={classes.cardContent}>{data.data.nome}</Text>
            </Flex>

            <Flex mt="md">
              <IconToCopyText text={data.data.cpf} />
              <Text mx="5" className={classes.cardTitle}>
                CPF:
              </Text>
              <Text className={classes.cardContent}>{data.data.cpf}</Text>
            </Flex>

            <Flex mt="md">
              <IconToCopyText text={data.data.data_nascimento} />
              <Text mx="5" className={classes.cardTitle}>
                Nascimento:
              </Text>
              <Text className={classes.cardContent}>{data.data.data_nascimento}</Text>
            </Flex>

            <Flex mt="md">
              <IconToCopyText text={data.data.idade} />
              <Text mx="5" className={classes.cardTitle}>
                Idade:
              </Text>
              <Text className={classes.cardContent}>{data.data.idade}</Text>
            </Flex>

            <Flex mt="md">
              <IconToCopyText text={data.data.sexo} />
              <Text mx="5" className={classes.cardTitle}>
                Sexo:
              </Text>
              <Text className={classes.cardContent}>{data.data.sexo}</Text>
            </Flex>
          </SimpleGrid>
        </Card>
      </SimpleGrid>
    </Container>
  )
}
