import { IconToCopyText } from '@/src/components/IconToCopyText'
import classes from '@/src/global/style/Cards.module.css'
import { CpfResponseBySpcType } from '@/src/services/types'
import { Card, Container, Divider, Flex, SimpleGrid, Text, Title } from '@mantine/core'

type CardPros = {
  data: CpfResponseBySpcType
}
export function SpcByCpfCard({ data: { data } }: CardPros) {
  return (
    <Container size="lg" py="xl" className={classes.container}>
      <Card shadow="md" radius="md" className={classes.card} padding="xl">
        <Flex mt="md">
          <Text mx="5" className={classes.cardTitle}>
            Consultado em:
          </Text>
          <Text className={classes.cardContent}>{data.data?.dataConsulta}</Text>
        </Flex>

        {/* DADOS PRINCIPAIS */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title ta="center">DADOS PRINCIPAIS</Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="1">
          <Flex>
            <IconToCopyText text={data.data?.nome} />
            <Text mx="5" className={classes.cardTitle}>
              Nome:
            </Text>
            <Text className={classes.cardContent}>{data.data?.nome}</Text>
          </Flex>

          <Flex>
            <IconToCopyText text={data.data?.extrangeiro} />
            <Text mx="5" className={classes.cardTitle}>
              Estrangeiro:
            </Text>
            <Text className={classes.cardContent}>{data.data?.extrangeiro}</Text>
          </Flex>

          {data.data?.rg && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.rg} />
              <Text mx="5" className={classes.cardTitle}>
                RG:
              </Text>
              <Text className={classes.cardContent}>{data.data?.rg}</Text>
            </Flex>
          )}

          {data.data?.uf_rg && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.uf_rg} />
              <Text mx="5" className={classes.cardTitle}>
                RG UF:
              </Text>
              <Text className={classes.cardContent}>{data.data?.uf_rg}</Text>
            </Flex>
          )}

          {data.data?.cpf && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.cpf} />
              <Text mx="5" className={classes.cardTitle}>
                CPF:
              </Text>
              <Text className={classes.cardContent}>{data.data?.cpf}</Text>
            </Flex>
          )}

          {data.data?.tituloEleitoral && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.tituloEleitoral} />
              <Text mx="5" className={classes.cardTitle}>
                Título eleitoral:
              </Text>
              <Text className={classes.cardContent}>{data.data?.tituloEleitoral}</Text>
            </Flex>
          )}

          {data.data?.cpfRegiao && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.cpfRegiao} />
              <Text mx="5" className={classes.cardTitle}>
                Região do CPF:
              </Text>
              <Text className={classes.cardContent}>{data.data?.cpfRegiao}</Text>
            </Flex>
          )}

          {data.data?.dataNascimento && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.dataNascimento} />
              <Text mx="5" className={classes.cardTitle}>
                Nascimento:
              </Text>
              <Text className={classes.cardContent}>{data.data?.dataNascimento}</Text>
            </Flex>
          )}

          {data.data?.signo && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.signo} />
              <Text mx="5" className={classes.cardTitle}>
                Signo:
              </Text>
              <Text className={classes.cardContent}>{data.data?.signo}</Text>
            </Flex>
          )}

          {data.data?.idade && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.idade} />
              <Text mx="5" className={classes.cardTitle}>
                Idade:
              </Text>
              <Text className={classes.cardContent}>{data.data?.idade}</Text>
            </Flex>
          )}

          {data.data?.dividasSpc && data.data?.dividasSpc['quantidade-total'] && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.dividasSpc['quantidade-total']} />
              <Text mx="5" className={classes.cardTitle}>
                Qtd dívidas SPC:
              </Text>
              <Text className={classes.cardContent}>{data.data?.dividasSpc['quantidade-total']}</Text>
            </Flex>
          )}

          {data.data?.dividasSpc && data.data?.dividasSpc['valor-total'] && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.dividasSpc['valor-total']} />
              <Text mx="5" className={classes.cardTitle}>
                Dívidas SPC:
              </Text>
              <Text className={classes.cardContent}>{data.data?.dividasSpc['valor-total']}</Text>
            </Flex>
          )}

          {data.data?.sexo && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.sexo} />
              <Text mx="5" className={classes.cardTitle}>
                Sexo:
              </Text>
              <Text className={classes.cardContent}>{data.data?.sexo}</Text>
            </Flex>
          )}

          {data.data?.nomeMae && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.nomeMae} />
              <Text mx="5" className={classes.cardTitle}>
                Mãe:
              </Text>
              <Text className={classes.cardContent}>{data.data?.nomeMae}</Text>
            </Flex>
          )}

          {data.data?.nomePai && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.nomePai} />
              <Text mx="5" className={classes.cardTitle}>
                Pai:
              </Text>
              <Text className={classes.cardContent}>{data.data?.nomePai}</Text>
            </Flex>
          )}

          {data.data?.telefoneCelular && data.data?.telefoneCelular.numero && (
            <Flex mt="md">
              <IconToCopyText
                text={`(${data.data?.telefoneCelular['numero-ddd']}) ${data.data?.telefoneCelular.numero}`}
              />
              <Text mx="5" className={classes.cardTitle}>
                Telefone:
              </Text>
              <Text
                className={classes.cardContent}
              >{`(${data.data?.telefoneCelular['numero-ddd']}) ${data.data?.telefoneCelular.numero}`}</Text>
            </Flex>
          )}

          {data.data?.ultimoTelefone && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.ultimoTelefone} />
              <Text mx="5" className={classes.cardTitle}>
                Último Telefone:
              </Text>
              <Text className={classes.cardContent}>{data.data?.ultimoTelefone}</Text>
            </Flex>
          )}
        </SimpleGrid>

        {/* ENDEREÇO */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title ta="center">ENDEREÇO</Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="1">
          {data.data?.endereco?.cep && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.endereco?.cep} />
              <Text mx="5" className={classes.cardTitle}>
                CEP:
              </Text>
              <Text className={classes.cardContent}>{data.data?.endereco?.cep}</Text>
            </Flex>
          )}

          {data.data?.endereco?.cidade?.estado && data.data?.endereco?.cidade?.estado['sigla-uf'] && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.endereco?.cidade?.estado['sigla-uf']} />
              <Text mx="5" className={classes.cardTitle}>
                UF:
              </Text>
              <Text className={classes.cardContent}>{data.data?.endereco?.cidade?.estado['sigla-uf']}</Text>
            </Flex>
          )}

          {data.data?.endereco?.cidade?.nome && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.endereco?.cidade?.nome} />
              <Text mx="5" className={classes.cardTitle}>
                Cidade:
              </Text>
              <Text className={classes.cardContent}>{data.data?.endereco?.cidade?.nome}</Text>
            </Flex>
          )}

          {data.data?.endereco?.logradouro && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.endereco?.logradouro} />
              <Text mx="5" className={classes.cardTitle}>
                Logradouro:
              </Text>
              <Text className={classes.cardContent}>{data.data?.endereco?.logradouro}</Text>
            </Flex>
          )}

          {data.data?.endereco?.numero && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.endereco?.numero} />
              <Text mx="5" className={classes.cardTitle}>
                Número:
              </Text>
              <Text className={classes.cardContent}>{data.data?.endereco?.numero}</Text>
            </Flex>
          )}

          {data.data?.endereco?.bairro && (
            <Flex mt="md">
              <IconToCopyText text={data.data?.endereco?.bairro} />
              <Text mx="5" className={classes.cardTitle}>
                Bairro:
              </Text>
              <Text className={classes.cardContent}>{data.data?.endereco?.bairro}</Text>
            </Flex>
          )}
        </SimpleGrid>
      </Card>
    </Container>
  )
}
