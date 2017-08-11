const fetch = require('node-fetch')

const getCurrentPrice = (id) => {
  fetch(`https://api.coinmarketcap.com/v1/ticker/${id}/`)
    .then(x => x.json())
    .then(console.log)
}

getCurrentPrice('bitcoin')
