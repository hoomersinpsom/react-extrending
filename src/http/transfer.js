import http from '@/http'

export function transfer (numeroCartao, valorTransferencia) {
  return http.post(`/transfers/contas/transferencias-creditos-cartoes?numero_cartao=${numeroCartao}&valor_transferencia=${valorTransferencia}`)
}

export function findCard (numeroCartao) {
  return http.get(`/cards/conductor/cartoes/cartoes-numero?numeroCartao=${numeroCartao}`)
}
