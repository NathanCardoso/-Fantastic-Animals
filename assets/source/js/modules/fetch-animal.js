import NumberAnimation from './number-animation.js'

export default function initFetchAnimal() {
  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('animal-number')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`

    return div
  }

  async function fetchAnimal(url) {
    try {
      const animalResponse = await fetch(url)
      const animalJson = await animalResponse.json()
      const gridAnimal = document.querySelector('.grid-number')

      animalJson.forEach((animal) => {
        const divAnimal = createAnimal(animal)
        gridAnimal.appendChild(divAnimal)
      })
      const numberAnimation = new NumberAnimation('[data-number]', '.number', 'active')
      numberAnimation.init()
    } catch (erro) {
      console.log(erro)
    }
  }

  fetchAnimal('../../assets/source/js/vendor/api-animal.json')
}
