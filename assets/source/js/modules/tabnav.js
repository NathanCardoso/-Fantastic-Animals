export default function initTabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabcontent = document.querySelectorAll('[data-tab="content"] section')

  function activeTab(index) {
    tabcontent.forEach((section) => {
      section.classList.remove('active')
    })
    const direction = tabcontent[index].dataset.anime
    tabcontent[index].classList.add('active', direction)
  }

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add('active')

    tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
