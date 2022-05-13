export default function initNumberAnimation() {
  let observer
  const observerTarget = document.querySelector('.number')

  function animationNumber() {
    const numbers = document.querySelectorAll('[data-number]')

    numbers.forEach((number) => {
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
    })
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect()
      animationNumber()
    }
  }
  observer = new MutationObserver(handleMutation)
  observer.observe(observerTarget, { attributes: true })
}
