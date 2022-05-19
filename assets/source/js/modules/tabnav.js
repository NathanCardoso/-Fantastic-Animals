export default class TabNav {
  constructor(menu, content) {
    this.tabmenu = document.querySelectorAll(menu)
    this.tabcontent = document.querySelectorAll(content)
    this.activeClass = 'active'
  }

  //active tab to according its index
  activeTab(index) {
    this.tabcontent.forEach((section) => {
      section.classList.remove(this.activeClass)
    })
    const direction = this.tabcontent[index].dataset.anime
    this.tabcontent[index].classList.add(this.activeClass, direction)
  }

  //add the events in the tabs
  addTabNavEvent() {
    this.tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index))
    })
  }

  init() {
    if (this.tabmenu.length && this.tabcontent.length) {
      //active first item
      this.activeTab(0)
      this.addTabNavEvent()
    }
    return this
  }
}
