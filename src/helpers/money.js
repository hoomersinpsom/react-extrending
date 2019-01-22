const MoneyMask = (n, hidePrefix = false) => {
  if (n === null) return null
  let options = {}
  if (!hidePrefix) options = { style: 'currency', currency: 'USD' }
  if (hidePrefix) options = { minimumFractionDigits: 2 }
  return n.toLocaleString('en-us', options)
}

export default MoneyMask 