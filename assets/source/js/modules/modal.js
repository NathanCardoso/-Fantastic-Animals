export default function initModal() {
  const modalShow = document.querySelector('[data-modal="show"]')
  const modalCloser = document.querySelector('[data-modal="closer"]')
  const modalContainer = document.querySelector('[data-modal="modal"]')

  function showModal(event) {
    event.preventDefault()
    modalContainer.classList.toggle('active')
  }

  function closerModal(event) {
    if (event.target === this) {
      showModal(event)
    }
  }

  if (modalShow && modalCloser && modalContainer) {
    modalShow.addEventListener('click', showModal)
    modalCloser.addEventListener('click', showModal)
    modalContainer.addEventListener('click', closerModal)
  }
}
