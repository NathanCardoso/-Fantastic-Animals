export default async function fetchBitcoin(url, target) {
  try {
    const promiseBTC = await fetch(url)
    const responseBTC = await promiseBTC.json()
    const seleBTC = document.querySelector(target)
    seleBTC.innerText = (1000 / responseBTC.BRL.sell).toFixed(4)
  } catch (erro) {
    console.log(erro)
  }
}
