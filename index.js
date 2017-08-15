const fetch = require('node-fetch')

const getCurrentPrice = async (id) => {
  const url = `https://api.coinmarketcap.com/v1/ticker/${id}/`
  const res = await fetch(url).then(x => x.json())
  return res[0].price_usd
}

const myHoldings = {
  ethereum: 2.9,
  neo: 377,
  augur: 31,
  metaverse: 201,
  civic: 1111,
  zencash: 456,
}

const displayHoldings = async (holdings) => {
  console.log('Currency (Amount) | Price | Book Value')
  console.log('--------------------------------------')
  let total = 0
  for (var prop in holdings) {
    const currency = prop
    const amount = holdings[prop]
    const price = await getCurrentPrice(currency)
    const value = price * amount
    console.log(`${currency} (${amount}) | $${parseFloat(price).toFixed(2)} | $${value.toFixed(2)}`)
    total += price * amount
  }
  console.log('====')
  console.log(`Total portfolio in USD: $${total.toFixed(2)}`)
}

displayHoldings(myHoldings)
