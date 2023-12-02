import { IconToCopyText } from '@/src/components/IconToCopyText'
import classes from '@/src/global/style/Cards.module.css'
import { CpfResponseBySpcType } from '@/src/services/types'
import { Text, Card, SimpleGrid, Container, Flex, Title, Divider } from '@mantine/core'

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
          <Text className={classes.cardContent}>{data?.dataConsulta}</Text>
        </Flex>

        {/* DADOS PRINCIPAIS */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title ta="center">DADOS PRINCIPAIS</Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="1">
          <Flex>
            <IconToCopyText text={data?.nome} />
            <Text mx="5" className={classes.cardTitle}>
              Nome:
            </Text>
            <Text className={classes.cardContent}>{data?.nome}</Text>
          </Flex>

          <Flex>
            <IconToCopyText text={data?.extrangeiro} />
            <Text mx="5" className={classes.cardTitle}>
              Estrangeiro:
            </Text>
            <Text className={classes.cardContent}>{data?.extrangeiro}</Text>
          </Flex>

          {data?.rg && (
            <Flex mt="md">
              <IconToCopyText text={data?.rg} />
              <Text mx="5" className={classes.cardTitle}>
                RG:
              </Text>
              <Text className={classes.cardContent}>{data?.rg}</Text>
            </Flex>
          )}

          {data?.uf_rg && (
            <Flex mt="md">
              <IconToCopyText text={data?.uf_rg} />
              <Text mx="5" className={classes.cardTitle}>
                RG UF:
              </Text>
              <Text className={classes.cardContent}>{data?.uf_rg}</Text>
            </Flex>
          )}

          {data?.cpf && (
            <Flex mt="md">
              <IconToCopyText text={data?.cpf} />
              <Text mx="5" className={classes.cardTitle}>
                CPF:
              </Text>
              <Text className={classes.cardContent}>{data?.cpf}</Text>
            </Flex>
          )}

          {data?.tituloEleitoral && (
            <Flex mt="md">
              <IconToCopyText text={data?.tituloEleitoral} />
              <Text mx="5" className={classes.cardTitle}>
                Título eleitoral:
              </Text>
              <Text className={classes.cardContent}>{data?.tituloEleitoral}</Text>
            </Flex>
          )}

          {data?.cpfRegiao && (
            <Flex mt="md">
              <IconToCopyText text={data?.cpfRegiao} />
              <Text mx="5" className={classes.cardTitle}>
                Região do CPF:
              </Text>
              <Text className={classes.cardContent}>{data?.cpfRegiao}</Text>
            </Flex>
          )}

          {data?.dataNascimento && (
            <Flex mt="md">
              <IconToCopyText text={data?.dataNascimento} />
              <Text mx="5" className={classes.cardTitle}>
                Nascimento:
              </Text>
              <Text className={classes.cardContent}>{data?.dataNascimento}</Text>
            </Flex>
          )}

          {data?.signo && (
            <Flex mt="md">
              <IconToCopyText text={data?.signo} />
              <Text mx="5" className={classes.cardTitle}>
                Signo:
              </Text>
              <Text className={classes.cardContent}>{data?.signo}</Text>
            </Flex>
          )}

          {data?.idade && (
            <Flex mt="md">
              <IconToCopyText text={data?.idade} />
              <Text mx="5" className={classes.cardTitle}>
                Idade:
              </Text>
              <Text className={classes.cardContent}>{data?.idade}</Text>
            </Flex>
          )}

          {data?.dividasSpc['quantidade-total'] && (
            <Flex mt="md">
              <IconToCopyText text={data?.dividasSpc['quantidade-total']} />
              <Text mx="5" className={classes.cardTitle}>
                Qtd dívidas SPC:
              </Text>
              <Text className={classes.cardContent}>{data?.tem_restricao_spc}</Text>
            </Flex>
          )}

          {data?.dividasSpc['valor-total'] && (
            <Flex mt="md">
              <IconToCopyText text={data?.dividasSpc['valor-total']} />
              <Text mx="5" className={classes.cardTitle}>
                Dívidas SPC:
              </Text>
              <Text className={classes.cardContent}>{data?.dividasSpc['valor-total']}</Text>
            </Flex>
          )}

          {data?.sexo && (
            <Flex mt="md">
              <IconToCopyText text={data?.sexo} />
              <Text mx="5" className={classes.cardTitle}>
                Sexo:
              </Text>
              <Text className={classes.cardContent}>{data?.sexo}</Text>
            </Flex>
          )}

          {data?.nomeMae && (
            <Flex mt="md">
              <IconToCopyText text={data?.nomeMae} />
              <Text mx="5" className={classes.cardTitle}>
                Mãe:
              </Text>
              <Text className={classes.cardContent}>{data?.nomeMae}</Text>
            </Flex>
          )}

          {data?.nomePai && (
            <Flex mt="md">
              <IconToCopyText text={data?.nomePai} />
              <Text mx="5" className={classes.cardTitle}>
                Pai:
              </Text>
              <Text className={classes.cardContent}>{data?.nomePai}</Text>
            </Flex>
          )}

          {data?.telefoneCelular?.numero && (
            <Flex mt="md">
              <IconToCopyText
                text={`(${data?.telefoneCelular['numero-ddd']}) ${data?.telefoneCelular.numero}`}
              />
              <Text mx="5" className={classes.cardTitle}>
                Telefone:
              </Text>
              <Text
                className={classes.cardContent}
              >{`(${data?.telefoneCelular['numero-ddd']}) ${data?.telefoneCelular.numero}`}</Text>
            </Flex>
          )}

          {data?.ultimoTelefone && (
            <Flex mt="md">
              <IconToCopyText text={data?.ultimoTelefone} />
              <Text mx="5" className={classes.cardTitle}>
                Último Telefone:
              </Text>
              <Text className={classes.cardContent}>{data?.ultimoTelefone}</Text>
            </Flex>
          )}
        </SimpleGrid>

        {/* ENDEREÇO */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title ta="center">ENDEREÇO</Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="1">
          {data?.endereco?.cep && (
            <Flex mt="md">
              <IconToCopyText text={data?.endereco?.cep} />
              <Text mx="5" className={classes.cardTitle}>
                CEP:
              </Text>
              <Text className={classes.cardContent}>{data?.endereco?.cep}</Text>
            </Flex>
          )}

          {data?.endereco?.cidade?.estado['sigla-uf'] && (
            <Flex mt="md">
              <IconToCopyText text={data?.endereco?.cidade?.estado['sigla-uf']} />
              <Text mx="5" className={classes.cardTitle}>
                UF:
              </Text>
              <Text className={classes.cardContent}>{data?.endereco?.cidade?.estado['sigla-uf']}</Text>
            </Flex>
          )}

          {data?.endereco?.cidade?.nome && (
            <Flex mt="md">
              <IconToCopyText text={data?.endereco?.cidade?.nome} />
              <Text mx="5" className={classes.cardTitle}>
                Cidade:
              </Text>
              <Text className={classes.cardContent}>{data?.endereco?.cidade?.nome}</Text>
            </Flex>
          )}

          {data?.endereco?.logradouro && (
            <Flex mt="md">
              <IconToCopyText text={data?.endereco?.logradouro} />
              <Text mx="5" className={classes.cardTitle}>
                Logradouro:
              </Text>
              <Text className={classes.cardContent}>{data?.endereco?.logradouro}</Text>
            </Flex>
          )}

          {data?.endereco?.numero && (
            <Flex mt="md">
              <IconToCopyText text={data?.endereco?.numero} />
              <Text mx="5" className={classes.cardTitle}>
                Número:
              </Text>
              <Text className={classes.cardContent}>{data?.endereco?.numero}</Text>
            </Flex>
          )}

          {data?.endereco?.bairro && (
            <Flex mt="md">
              <IconToCopyText text={data?.endereco?.bairro} />
              <Text mx="5" className={classes.cardTitle}>
                Bairro:
              </Text>
              <Text className={classes.cardContent}>{data?.endereco?.bairro}</Text>
            </Flex>
          )}
        </SimpleGrid>
      </Card>
    </Container>
  )
}
