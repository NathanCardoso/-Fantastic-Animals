export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const promiseBTC = await fetch(url)
      const responseBTC = await promiseBTC.json()
      const seleBTC = document.querySelector('.btc-price')
      seleBTC.innerText = (1000 / responseBTC.BRL.sell).toFixed(4)
    } catch (erro) {
      console.log(erro)
    }
  }
  fetchBitcoin('https://blockchain.info/ticker')
}
