import NumberAnimation from './number-animation.js'

export default function fetchAnimal(url, target) {
  //create div content information with the all animals
  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('animal-number')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`

    return div
  }

  //fill each animal in the dom
  const gridAnimal = document.querySelector(target)
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal)
    gridAnimal.appendChild(divAnimal)
  }

  //animate number to the each animal
  function animateNumberAnimals() {
    const numberAnimation = new NumberAnimation('[data-number]', '.number', 'active')
    numberAnimation.init()
  }

  //pull animals through a json file and create animal using createAnimals
  async function createAnimals() {
    try {
      //fetch and wait response
      const animalResponse = await fetch(url)
      //tranformation the response in json
      const animalJson = await animalResponse.json()

      animalJson.forEach(animal => fillAnimals(animal))
      animateNumberAnimals()
    } catch (erro) {
      console.log(erro)
    }
  }

  return createAnimals()
}
