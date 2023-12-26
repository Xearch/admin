/* eslint-disable no-unsafe-optional-chaining */
import { IconToCopyText } from '@/src/components/IconToCopyText'
import classes from '@/src/global/style/Cards.module.css'
import { FindCompleteCpfType } from '@/src/services/types'
import parseCurrency from '@/src/services/utils/parseCurrency'
import { Card, Container, Divider, Flex, SimpleGrid, Text, Title } from '@mantine/core'

type CardPros = {
  data: FindCompleteCpfType
}
export function CompleteCpfCard({ data }: CardPros) {
  return (
    <Container className={classes.container} size="lg" py="xl">
      <Card shadow="md" radius="md" className={classes.card} padding="xl">
        <Flex mt="md">
          <Text mx="5" className={classes.cardTitle}>
            Consultado em:
          </Text>
          <Text className={classes.cardContent}>{data.data.dataConsulta}</Text>
        </Flex>

        {/* DADOS PRINCIPAIS */}
        <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
          <Title className={classes.title} ta="center">
            DADOS PRINCIPAIS
          </Title>
        </SimpleGrid>

        <Divider mt="md" mb={20} />

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="1">
          {data.data.nome && (
            <Flex mt="md">
              <IconToCopyText text={data.data.nome} />
              <Text mx="5" className={classes.cardTitle}>
                Nome:
              </Text>
              <Text className={classes.cardContent}>{data.data.nome}</Text>
            </Flex>
          )}

          {data.data.cpf && (
            <Flex mt="md">
              <IconToCopyText text={data.data.cpf} />
              <Text mx="5" className={classes.cardTitle}>
                CPF:
              </Text>
              <Text className={classes.cardContent}>{data.data.cpf}</Text>
            </Flex>
          )}

          {data.data.dataNascimento && (
            <Flex mt="md">
              <IconToCopyText text={data.data.dataNascimento} />
              <Text mx="5" className={classes.cardTitle}>
                Nascimento:
              </Text>
              <Text className={classes.cardContent}>{data.data.dataNascimento}</Text>
            </Flex>
          )}

          {data.data.nomeMae && (
            <Flex mt="md">
              <IconToCopyText text={data.data.nomeMae} />
              <Text mx="5" className={classes.cardTitle}>
                Mãe:
              </Text>
              <Text className={classes.cardContent}>{data.data.nomeMae}</Text>
            </Flex>
          )}

          {data.data.nomePai && (
            <Flex mt="md">
              <IconToCopyText text={data.data.nomePai} />
              <Text mx="5" className={classes.cardTitle}>
                Pai:
              </Text>
              <Text className={classes.cardContent}>{data.data.nomePai}</Text>
            </Flex>
          )}

          {data.data.pisNis && (
            <Flex mt="md">
              <IconToCopyText text={data.data.pisNis} />
              <Text mx="5" className={classes.cardTitle}>
                PisNis:
              </Text>
              <Text className={classes.cardContent}>{data.data.pisNis}</Text>
            </Flex>
          )}

          {data.data.rgNumero && (
            <Flex mt="md">
              <IconToCopyText text={data.data.rgNumero} />
              <Text mx="5" className={classes.cardTitle}>
                RG:
              </Text>
              <Text className={classes.cardContent}>{data.data.rgNumero}</Text>
            </Flex>
          )}

          {data.data.rgEmissorOrgao && (
            <Flex mt="md">
              <IconToCopyText text={data.data.rgEmissorOrgao} />
              <Text mx="5" className={classes.cardTitle}>
                Órgão emissor do RG:
              </Text>
              <Text className={classes.cardContent}>{data.data.rgEmissorOrgao}</Text>
            </Flex>
          )}

          {data.data.sexo && (
            <Flex mt="md">
              <Text mx="5" className={classes.cardTitle}>
                Sexo:
              </Text>
              <Text className={classes.cardContent}>{data.data.sexo}</Text>
            </Flex>
          )}

          {data.data.naturalidade && (
            <Flex mt="md">
              <Text mx="5" className={classes.cardTitle}>
                Naturalidade:
              </Text>
              <Text className={classes.cardContent}>{data.data.naturalidade}</Text>
            </Flex>
          )}

          {data.data.nacionalidade && (
            <Flex mt="md">
              <Text mx="5" className={classes.cardTitle}>
                Nacionalidade:
              </Text>
              <Text className={classes.cardContent}>{data.data.nacionalidade}</Text>
            </Flex>
          )}

          {data.data.rgEmissorUf && (
            <Flex mt="md">
              <IconToCopyText text={data.data.rgEmissorUf} />
              <Text mx="5" className={classes.cardTitle}>
                RG UF:
              </Text>
              <Text className={classes.cardContent}>{data.data.rgEmissorUf}</Text>
            </Flex>
          )}

          {data.data.estadoCivil && (
            <Flex mt="md">
              <IconToCopyText text={data.data.estadoCivil} />
              <Text mx="5" className={classes.cardTitle}>
                Estado civil:
              </Text>
              <Text className={classes.cardContent}>{data.data.estadoCivil}</Text>
            </Flex>
          )}

          {data.data.ocupacao && (
            <Flex mt="md">
              <IconToCopyText text={data.data.ocupacao} />
              <Text mx="5" className={classes.cardTitle}>
                Ocupação:
              </Text>
              <Text className={classes.cardContent}>{data.data.ocupacao}</Text>
            </Flex>
          )}

          {data.data.classeSocial && (
            <Flex mt="md">
              <IconToCopyText text={data.data.classeSocial} />
              <Text mx="5" className={classes.cardTitle}>
                Classe social:
              </Text>
              <Text className={classes.cardContent}>{data.data.classeSocial}</Text>
            </Flex>
          )}

          {data.data.tituloEleitor && (
            <Flex mt="md">
              <IconToCopyText text={data.data.tituloEleitor} />
              <Text mx="5" className={classes.cardTitle}>
                Título Eleitoral:
              </Text>
              <Text className={classes.cardContent}>{data.data.tituloEleitor}</Text>
            </Flex>
          )}

          {data.data.score >= 0 && (
            <Flex mt="md">
              <IconToCopyText text={String(data.data.score)} />
              <Text mx="5" className={classes.cardTitle}>
                Score Serasa:
              </Text>
              <Text className={classes.cardContent}>{String(data.data.score)}</Text>
            </Flex>
          )}

          {data.data.renda && (
            <Flex mt="md">
              <IconToCopyText text={parseCurrency(data.data.renda)} />
              <Text mx="5" className={classes.cardTitle}>
                Renda Média:
              </Text>
              <Text className={classes.cardContent}>{parseCurrency(data.data.renda)}</Text>
            </Flex>
          )}

          {data.data.poderAquisitivo && (
            <Flex mt="md">
              <IconToCopyText text={data.data.poderAquisitivo} />
              <Text mx="5" className={classes.cardTitle}>
                Poder aquisitivo:
              </Text>
              <Text className={classes.cardContent}>{data.data.poderAquisitivo}</Text>
            </Flex>
          )}

          {data.data.escolaridade && (
            <Flex mt="md">
              <IconToCopyText text={data.data.escolaridade} />
              <Text mx="5" className={classes.cardTitle}>
                Escolaridade:
              </Text>
              <Text className={classes.cardContent}>{data.data.escolaridade}</Text>
            </Flex>
          )}

          {data.data.situacaoRF && (
            <Flex mt="md">
              <IconToCopyText text={data.data.situacaoRF} />
              <Text mx="5" className={classes.cardTitle}>
                Situação na RF:
              </Text>
              <Text className={classes.cardContent}>{data.data.situacaoRF}</Text>
            </Flex>
          )}
        </SimpleGrid>

        {/* ENDEREÇOS */}
        {data.data.enderecos && data.data.enderecos.length > 0 && (
          <>
            <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
              <Title className={classes.title} ta="center">
                ENDEREÇOS
              </Title>
            </SimpleGrid>

            <Divider mt="md" mb={20} />

            <SimpleGrid cols={{ base: 1, md: 4 }} spacing="1">
              {data.data.enderecos.map(i => (
                <>
                  <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1" key={i.cep}>
                    <Title fz="lg" ta="center">
                      ENDEREÇO{' '}
                      {data.data.enderecos &&
                        data.data.enderecos.length > 0 &&
                        data?.data?.enderecos?.indexOf(i) + 1}
                    </Title>
                    {i.cep && (
                      <Flex mt="md">
                        <IconToCopyText text={i.cep} />
                        <Text mx="5" className={classes.cardTitle}>
                          CEP:
                        </Text>
                        <Text className={classes.cardContent}>{i.cep}</Text>
                      </Flex>
                    )}

                    {i.estadoUF && (
                      <Flex mt="md">
                        <IconToCopyText text={i.estadoUF} />
                        <Text mx="5" className={classes.cardTitle}>
                          UF:
                        </Text>
                        <Text className={classes.cardContent}>{i.estadoUF}</Text>
                      </Flex>
                    )}

                    {i.cidade && (
                      <Flex mt="md">
                        <IconToCopyText text={i.cidade} />
                        <Text mx="5" className={classes.cardTitle}>
                          Cidade:
                        </Text>
                        <Text className={classes.cardContent}>{i.cidade}</Text>
                      </Flex>
                    )}

                    {i.endereco && (
                      <Flex mt="md">
                        <IconToCopyText text={i.endereco} />
                        <Text mx="5" className={classes.cardTitle}>
                          Logradouro:
                        </Text>
                        <Text className={classes.cardContent}>{i.endereco}</Text>
                      </Flex>
                    )}

                    {i.complemento && (
                      <Flex mt="md">
                        <IconToCopyText text={i.complemento} />
                        <Text mx="5" className={classes.cardTitle}>
                          Complemento:
                        </Text>
                        <Text className={classes.cardContent}>{i.complemento}</Text>
                      </Flex>
                    )}

                    {i.numero && (
                      <Flex mt="md">
                        <IconToCopyText text={i.numero} />
                        <Text mx="5" className={classes.cardTitle}>
                          Número:
                        </Text>
                        <Text className={classes.cardContent}>{i.numero}</Text>
                      </Flex>
                    )}

                    {i.bairro && (
                      <Flex mt="md">
                        <IconToCopyText text={i.bairro} />
                        <Text mx="5" className={classes.cardTitle}>
                          Bairro:
                        </Text>
                        <Text className={classes.cardContent}>{i.bairro}</Text>
                      </Flex>
                    )}
                  </SimpleGrid>
                </>
              ))}
            </SimpleGrid>
          </>
        )}

        {/* TELEFONES */}
        {data.data.telefones && data.data.telefones.length > 0 && (
          <>
            <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
              <Title className={classes.title} ta="center">
                TELEFONES
              </Title>
            </SimpleGrid>

            <Divider mt="md" mb={20} />

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="1">
              {data.data.telefones.map(t => (
                <>
                  <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1" key={t.ddd}>
                    {t.ddd && t.numero && (
                      <Flex mt="md">
                        <IconToCopyText text={`(${t.ddd}) ${t.numero}`} />
                        <Title fz="md" ta="center" mx="5" className={classes.cardTitle}>
                          TELEFONE{' '}
                          {data.data.telefones &&
                            data.data.telefones.length > 0 &&
                            data?.data?.telefones?.indexOf(t) + 1}
                          :
                        </Title>
                        <Text className={classes.cardContent}>{`(${t.ddd}) ${t.numero}`}</Text>
                      </Flex>
                    )}
                  </SimpleGrid>
                </>
              ))}
            </SimpleGrid>
          </>
        )}

        {/* FAMILIARES */}
        {data.data.familiares && data.data.familiares.length > 0 && (
          <>
            <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
              <Title className={classes.title} ta="center">
                FAMILIARES
              </Title>
            </SimpleGrid>

            <Divider mt="md" mb={20} />

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="1">
              {data.data.familiares.map(i => (
                <>
                  <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1" key={i.cpf}>
                    <Title fz="md" ta="center" mx="5" className={classes.cardTitle}>
                      PARENTE{' '}
                      {data.data.familiares &&
                        data.data.familiares.length > 0 &&
                        data?.data?.familiares?.indexOf(i) + 1}
                      :
                    </Title>
                    {i.nome && (
                      <Flex mt="md">
                        <IconToCopyText text={i.nome} />

                        <Text mx="5" className={classes.cardTitle}>
                          Nome:
                        </Text>
                        <Text className={classes.cardContent}>{i.nome}</Text>
                      </Flex>
                    )}
                    {i.cpf && (
                      <Flex mt="md">
                        <IconToCopyText text={i.cpf} />

                        <Text mx="5" className={classes.cardTitle}>
                          CPF:
                        </Text>
                        <Text className={classes.cardContent}>{i.cpf}</Text>
                      </Flex>
                    )}

                    {i.vinculo && (
                      <Flex mt="md">
                        <IconToCopyText text={i.vinculo} />

                        <Text mx="5" className={classes.cardTitle}>
                          Vínculo:
                        </Text>
                        <Text className={classes.cardContent}>{i.vinculo}</Text>
                      </Flex>
                    )}
                  </SimpleGrid>
                </>
              ))}
            </SimpleGrid>
          </>
        )}

        {/* VIZINHOS */}
        {data.data.vizinhos && data.data.vizinhos.length > 0 && (
          <>
            <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
              <Title className={classes.title} ta="center">
                VIZINHOS
              </Title>
            </SimpleGrid>

            <Divider mt="md" mb={20} />

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="1">
              {data.data.vizinhos.map(i => (
                <>
                  <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1" key={i.id}>
                    {i.nome && (
                      <>
                        <Flex align="center">
                          <IconToCopyText text={i.nome} />
                          <Title fz="md" ta="center" mx="5" className={classes.h2}>
                            {data.data.vizinhos &&
                              data.data.vizinhos.length > 0 &&
                              data?.data?.vizinhos?.indexOf(i) + 1}
                            :
                          </Title>
                          <Text className={classes.cardContent}>{i.nome}</Text>
                        </Flex>
                      </>
                    )}
                  </SimpleGrid>
                </>
              ))}
            </SimpleGrid>
          </>
        )}

        {/* EMPRESAS */}
        {data.data.empresas && data.data.empresas.length > 0 && (
          <>
            <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1">
              <Title className={classes.title} ta="center">
                EMPRESAS
              </Title>
            </SimpleGrid>

            <Divider mt="md" mb={20} />

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="1">
              {data.data.empresas.map(i => (
                <>
                  <SimpleGrid cols={{ base: 1, md: 1 }} spacing="1" key={i.cnpj}>
                    <Title fz="md" ta="center" mx="5" className={classes.cardTitle}>
                      EMPRESA{' '}
                      {data.data.empresas &&
                        data.data.empresas.length > 0 &&
                        data?.data?.empresas?.indexOf(i) + 1}
                      :
                    </Title>
                    {i.nome && (
                      <Flex mt="md">
                        <IconToCopyText text={i.nome} />

                        <Text mx="5" className={classes.cardTitle}>
                          Nome:
                        </Text>
                        <Text className={classes.cardContent}>{i.nome}</Text>
                      </Flex>
                    )}

                    {i.cnpj && (
                      <Flex mt="md">
                        <IconToCopyText text={i.cnpj} />

                        <Text mx="5" className={classes.cardTitle}>
                          CNPJ:
                        </Text>
                        <Text className={classes.cardContent}>{i.cnpj}</Text>
                      </Flex>
                    )}
                  </SimpleGrid>
                </>
              ))}
            </SimpleGrid>
          </>
        )}
      </Card>
    </Container>
  )
}
