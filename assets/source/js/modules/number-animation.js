export default class NumberAnimation {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass

    //bind the object's this to the mutation callback
    this.handleMutation = this.handleMutation.bind(this)
  }

  //receive a element to the dom, with com number in your text
  //increment from to the 0 to number finaly
  static numberIncrement(number) {
    const allNumber = +number.innerText
    const increment = Math.floor(allNumber / 100)
    let start = 0
    const timer = setInterval(() => {
      start += increment
      number.innerText = start
      if (start > allNumber) {
        number.innerText = allNumber
        clearInterval(timer)
      }
    }, 25 * Math.random())
  }

  //active increment number for each number selected of dom
  animationNumber() {
    this.numbers.forEach(number => this.constructor.numberIncrement(number))
  }

  //function that occurs when mutation occurs
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.animationNumber()
    }
  }

  //to add the mutationObserver to verification where the class active is add to the element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {
    if (this.numbers.length) {
      this.addMutationObserver();
    }
    return this;
  }
}
