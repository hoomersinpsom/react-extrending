import http from './index.js'

export function getSymbol (symbol) {
  return http.get(`/stock/${symbol}/batch?types=quote,chart,company&range=1m`)
}
