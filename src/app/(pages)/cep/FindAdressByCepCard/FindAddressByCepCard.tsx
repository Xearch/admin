import { IconToCopyText } from '@/src/components/IconToCopyText'
import classes from '@/src/global/style/Cards.module.css'
import { Address } from '@/src/services/endpoints/searchAddressByCep'
import { Card, Container, Divider, Flex, SimpleGrid, Skeleton, Text, Title } from '@mantine/core'

type CardPros = {
  address: Address | null
}

export function SkeletonCepCard() {
  return (
    <Container size="lg" py="xl" className={classes.container}>
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
    </Container>
  )
}

export function FindAddressByCepCard({ address }: CardPros) {
  return (
    <Container size="lg" py="xl" className={classes.container}>
      <Card shadow="md" radius="md" className={classes.card} padding="xl">
        {/* DADOS PRINCIPAIS */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title ta="center">DADOS PRINCIPAIS</Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
          {address?.zipcode && (
            <Flex>
              <IconToCopyText text={address?.zipcode} />
              <Text mx="5" className={classes.cardTitle}>
                CEP:
              </Text>
              <Text className={classes.cardTitle}>{address?.zipcode}</Text>
            </Flex>
          )}

          {address?.uf && (
            <Flex>
              <IconToCopyText text={address?.uf} />
              <Text mx="5" className={classes.cardTitle}>
                UF:
              </Text>
              <Text className={classes.cardTitle}>{address?.uf}</Text>
            </Flex>
          )}

          {address?.city && (
            <Flex>
              <IconToCopyText text={address?.city} />
              <Text mx="5" className={classes.cardTitle}>
                Cidade:
              </Text>
              <Text className={classes.cardTitle}>{address?.city}</Text>
            </Flex>
          )}

          {address?.district && (
            <Flex>
              <IconToCopyText text={address?.district} />
              <Text mx="5" className={classes.cardTitle}>
                Bairro:
              </Text>
              <Text className={classes.cardTitle}>{address?.district}</Text>
            </Flex>
          )}

          {address?.address && (
            <Flex>
              <IconToCopyText text={address?.address} />
              <Text mx="5" className={classes.cardTitle}>
                Logradouro:
              </Text>
              <Text className={classes.cardTitle}>{address?.address}</Text>
            </Flex>
          )}
        </SimpleGrid>

        {/* DADOS PRINCIPAIS */}
        {address?.location && (
          <>
            <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
              <Title ta="center">COORDENADAS</Title>
            </SimpleGrid>

            <Divider mt="md" mb={20} />

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="1">
              <Flex>
                <IconToCopyText text={address?.location.latitude} />
                <Text mx="5" className={classes.cardTitle}>
                  Latitude:
                </Text>
                <Text className={classes.cardTitle}>{address?.location.latitude}</Text>
              </Flex>

              <Flex>
                <IconToCopyText text={address?.location.longitude} />
                <Text mx="5" className={classes.cardTitle}>
                  Longitude:
                </Text>
                <Text className={classes.cardTitle}>{address?.location.longitude}</Text>
              </Flex>
            </SimpleGrid>
          </>
        )}
      </Card>
    </Container>
  )
}
