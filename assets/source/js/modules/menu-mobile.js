import outsideClick from './outside-click.js'

export default class MenuMobile {
  constructor(menuButton, menuList, userEvents) {
    this.menuButton = document.querySelector(menuButton)
    this.menuList = document.querySelector(menuList)
    this.activeClass = 'active'

    //touchstart and click defined width arguments default to userEvents if the user dows not define
    if (userEvents === undefined) {
      this.userEvents = ['click']
    } else {
      this.userEvents = this.userEvents
    }

    this.openMenu = this.openMenu.bind(this)
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass)
    this.menuButton.classList.add(this.activeClass)
    outsideClick(this.menuList, this.userEvents, () => {
      this.menuList.classList.remove(this.activeClass)
      this.menuButton.classList.remove(this.activeClass)
    });
  }

  addMenuMobileEvents() {
    this.userEvents.forEach(event => this.menuButton.addEventListener(event, this.openMenu))
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents()
    }
    return this
  }
}
