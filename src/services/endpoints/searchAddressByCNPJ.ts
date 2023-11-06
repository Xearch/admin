/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/src/services/api'
import { CnpjResponse, CnpjResponseType } from '@/src/services/types'
import getOnlyNumbers from '@/src/services/utils/getOnlyNumbers'

export async function searchAddressByCNPJ(CNPJ: string): Promise<CnpjResponse | null> {
  const cnpj = getOnlyNumbers(String(CNPJ))
  if (cnpj) {
    try {
      const { data } = await api.get<CnpjResponseType>(`/cnpj/${getOnlyNumbers(cnpj)}`)
      return {
        abertura: data.data.abertura,
        situacao: data.data.situacao,
        tipo: data.data.tipo,
        nome: data.data.nome,
        fantasia: data.data.fantasia,
        porte: data.data.porte,
        natureza_juridica: data.data.natureza_juridica,
        atividade_principal: data.data.atividade_principal,
        atividades_secundarias: data.data.atividades_secundarias,
        qsa: data.data.qsa,
        logradouro: data.data.logradouro,
        numero: data.data.numero,
        municipio: data.data.municipio,
        bairro: data.data.bairro,
        uf: data.data.uf,
        cep: data.data.cep,
        email: data.data.email,
        telefone: data.data.telefone,
        data_situacao: data.data.data_situacao,
        cnpj: data.data.cnpj,
        ultima_atualizacao: data.data.ultima_atualizacao,
        status: data.data.status,
        complemento: data.data.complemento,
        billing: data.data.billing,
        efr: data.data.efr,
        capital_social: data.data.capital_social,
        data_situacao_especial: data.data.data_situacao_especial,
        motivo_situacao: data.data.motivo_situacao,
        situacao_especial: data.data.situacao_especial,
      }
    } catch {
      return null
    }
  }
  return null
}
