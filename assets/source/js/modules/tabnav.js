// export default function initTabNav() {
//   const tabmenu = document.querySelectorAll('[data-tab="menu"] li')
//   const tabcontent = document.querySelectorAll('[data-tab="content"] section')

//   function activeTab(index) {
//     tabcontent.forEach((section) => {
//       section.classList.remove('active')
//     })
//     const direction = tabcontent[index].dataset.anime
//     tabcontent[index].classList.add('active', direction)
//   }

//   if (tabmenu.length && tabcontent.length) {
//     tabcontent[0].classList.add('active')

//     tabmenu.forEach((item, index) => {
//       item.addEventListener('click', () => {
//         activeTab(index)
//       })
//     })
//   }
// }

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
  }
}
