import classes from '@/src/global/style/Cards.module.css'
import { Card, SimpleGrid, Container, rem, Flex, Skeleton } from '@mantine/core'

export function CardSkeletonCpf() {
  return (
    <Container className={classes.container} size="lg" py="xl">
      <SimpleGrid cols={{ base: 1, md: 1 }} spacing="md">
        <Card shadow="md" radius="md" className={classes.card} padding="xl">
          <Flex mt="md">
            <Skeleton height={15} mt={6} w={rem(300)} radius="xl" />
          </Flex>
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
