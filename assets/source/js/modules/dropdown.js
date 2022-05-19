import outSideClick from './outside-click.js'

export default class Dropdown {
  constructor(dropwdownMenus, userEvents) {
    this.dropwdownMenus = document.querySelectorAll(dropwdownMenus)
    this.activeClass = 'active'

    //touchstart and click defined width arguments default to userEvents if the user dows not define
    if (userEvents === undefined) {
      this.userEvents = ['touchstart', 'click']
    } else {
      this.userEvents = this.userEvents
    }

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }

  //acived the dropdonw menu and add the function that watches the click outside of it
  activeDropdownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget
    element.classList.add(this.activeClass)
    outSideClick(element, this.userEvents, () => {
      element.classList.remove(this.activeClass)
    })
  }

  //add events to dropdown
  addDropdownMenusEvent() {
    this.dropwdownMenus.forEach((menu) => {
      this.userEvents.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu)
      })
    })
  }

  init() {
    if (this.dropwdownMenus.length) {
      this.addDropdownMenusEvent()
    }
    return this
  }
}
