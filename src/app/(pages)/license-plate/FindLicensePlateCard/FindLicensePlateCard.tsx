import { IconToCopyText } from '@/src/components/IconToCopyText'
import classes from '@/src/global/style/Cards.module.css'
import { FindByLicensePlateType } from '@/src/services/types'
import { Text, Card, SimpleGrid, Container, Flex, Skeleton, Divider, Title } from '@mantine/core'

type CardPros = {
  data: FindByLicensePlateType
}

export function SkeletonLicensePlateCard() {
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

export function FindLicensePlateCard({ data: { data } }: CardPros) {
  return (
    <Container size="lg" py="xl" className={classes.container}>
      <Card shadow="md" radius="md" className={classes.card} padding="xl">
        <Flex mt="md">
          <Text mx="5" className={classes.cardTitle}>
            Consultado em:
          </Text>
          <Text className={classes.cardContent}>{data.dataDaConsulta}</Text>
        </Flex>

        {/* DADOS PRINCIPAIS */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title ta="center">DADOS DO VEÍCULO</Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
          {data.nomeProprietario && (
            <Flex mt="md">
              <IconToCopyText text={data.nomeProprietario} />
              <Text mx="5" className={classes.cardTitle}>
                Proprietário:
              </Text>
              <Text className={classes.cardTitle}>{data.nomeProprietario}</Text>
            </Flex>
          )}

          {data.modelo && (
            <Flex mt="md">
              <IconToCopyText text={data.modelo} />
              <Text mx="5" className={classes.cardTitle}>
                Modelo:
              </Text>
              <Text className={classes.cardTitle}>{data.modelo}</Text>
            </Flex>
          )}

          {data.marca && (
            <Flex mt="md">
              <IconToCopyText text={data.marca} />
              <Text mx="5" className={classes.cardTitle}>
                Marca:
              </Text>
              <Text className={classes.cardTitle}>{data.marca}</Text>
            </Flex>
          )}

          {data.descricao && (
            <Flex mt="md">
              <IconToCopyText text={data.descricao} />
              <Text mx="5" className={classes.cardTitle}>
                Descrição:
              </Text>
              <Text className={classes.cardTitle}>{data.descricao}</Text>
            </Flex>
          )}

          {data.chassi && (
            <Flex mt="md">
              <IconToCopyText text={data.chassi} />
              <Text mx="5" className={classes.cardTitle}>
                Chassi:
              </Text>
              <Text className={classes.cardTitle}>{data.chassi}</Text>
            </Flex>
          )}

          {data.renavam && (
            <Flex mt="md">
              <IconToCopyText text={data.renavam} />
              <Text mx="5" className={classes.cardTitle}>
                Renavam:
              </Text>
              <Text className={classes.cardTitle}>{data.renavam}</Text>
            </Flex>
          )}

          {data.placa && (
            <Flex mt="md">
              <IconToCopyText text={data.placa} />
              <Text mx="5" className={classes.cardTitle}>
                Placa:
              </Text>
              <Text className={classes.cardTitle}>{data.placa}</Text>
            </Flex>
          )}

          {data.eixos && (
            <Flex mt="md">
              <IconToCopyText text={data.eixos} />
              <Text mx="5" className={classes.cardTitle}>
                Eixos:
              </Text>
              <Text className={classes.cardTitle}>{data.eixos}</Text>
            </Flex>
          )}

          {data.anoFabricacao && (
            <Flex mt="md">
              <IconToCopyText text={data.anoFabricacao} />
              <Text mx="5" className={classes.cardTitle}>
                Fabricação:
              </Text>
              <Text className={classes.cardTitle}>{data.anoFabricacao}</Text>
            </Flex>
          )}

          {data.anoModelo && (
            <Flex mt="md">
              <IconToCopyText text={data.anoModelo} />
              <Text mx="5" className={classes.cardTitle}>
                Ano do modelo:
              </Text>
              <Text className={classes.cardTitle}>{data.anoModelo}</Text>
            </Flex>
          )}

          {data.segmento && (
            <Flex mt="md">
              <IconToCopyText text={data.segmento} />
              <Text mx="5" className={classes.cardTitle}>
                Seguimento:
              </Text>
              <Text className={classes.cardTitle}>{data.segmento}</Text>
            </Flex>
          )}

          {data.especie && (
            <Flex mt="md">
              <IconToCopyText text={data.especie} />
              <Text mx="5" className={classes.cardTitle}>
                Especie:
              </Text>
              <Text className={classes.cardTitle}>{data.especie}</Text>
            </Flex>
          )}

          {data.tipoCarroceria && (
            <Flex mt="md">
              <IconToCopyText text={data.tipoCarroceria} />
              <Text mx="5" className={classes.cardTitle}>
                Tipo Carroceria:
              </Text>
              <Text className={classes.cardTitle}>{data.tipoCarroceria}</Text>
            </Flex>
          )}

          {data.tipoVeiculo && (
            <Flex mt="md">
              <IconToCopyText text={data.tipoVeiculo} />
              <Text mx="5" className={classes.cardTitle}>
                Tipo Veículo:
              </Text>
              <Text className={classes.cardTitle}>{data.tipoVeiculo}</Text>
            </Flex>
          )}

          {data.tempoCirculacao && (
            <Flex mt="md">
              <IconToCopyText text={`${data.tempoCirculacao} anos`} />
              <Text mx="5" className={classes.cardTitle}>
                Tempo Circulação:
              </Text>
              <Text className={classes.cardTitle}>{`${data.tempoCirculacao} anos`}</Text>
            </Flex>
          )}

          {data.status && (
            <Flex mt="md">
              <IconToCopyText text={data.status} />
              <Text mx="5" className={classes.cardTitle}>
                Status:
              </Text>
              <Text className={classes.cardTitle}>{data.status}</Text>
            </Flex>
          )}

          {data.cidade && (
            <Flex mt="md">
              <IconToCopyText text={data.cidade} />
              <Text mx="5" className={classes.cardTitle}>
                Cidade:
              </Text>
              <Text className={classes.cardTitle}>{data.cidade}</Text>
            </Flex>
          )}

          {data.estado && (
            <Flex mt="md">
              <IconToCopyText text={data.estado} />
              <Text mx="5" className={classes.cardTitle}>
                Cidade:
              </Text>
              <Text className={classes.cardTitle}>{data.estado}</Text>
            </Flex>
          )}
        </SimpleGrid>
      </Card>
    </Container>
  )
}
