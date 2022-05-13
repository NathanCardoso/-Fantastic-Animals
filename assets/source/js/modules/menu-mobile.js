import outsideClick from './outside-click.js'

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const userEvents = ['click']

  function openMenu() {
    menuList.classList.add('active')
    menuButton.classList.add('active')
    outsideClick(menuList, userEvents, () => {
      menuList.classList.remove('active')
      menuButton.classList.remove('active')
    });
  }

  if (menuButton) {
    menuButton.addEventListener('click', openMenu)
  }
}
