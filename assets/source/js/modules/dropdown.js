import outSideClick from './outside-click.js'

export default function initDropdown() {
  const dropwdownMenus = document.querySelectorAll('[data-dropdown]')
  const userEvents = ['touchstart', 'click']

  function handleClick(event) {
    event.preventDefault()
    this.classList.add('active')
    outSideClick(this, userEvents, () => {
      this.classList.remove('active')
    })
  }

  dropwdownMenus.forEach((menu) => {
    userEvents.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick)
    })
  })
}
