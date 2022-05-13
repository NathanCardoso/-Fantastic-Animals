export default function initSoftScroll() {
  const internalLink = document.querySelectorAll('[data-menu="soft"] a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault()
    const href = this.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  internalLink.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
