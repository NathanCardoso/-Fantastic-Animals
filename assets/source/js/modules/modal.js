export default class Modal {
  constructor(buttonShow, buttonCloser, modalContainer) {
    this.modalShow = document.querySelector(buttonShow)
    this.modalCloser = document.querySelector(buttonCloser)
    this.modalContainer = document.querySelector(modalContainer)

    //bind this to the callback to refer to the object fro class
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.closerClickModal = this.closerClickModal.bind(this)
  }

  //open and closer the modal
  toggleModal() {
    this.modalContainer.classList.toggle('active')
  }

  //add events in the toggle modal
  eventToggleModal(e) {
    e.preventDefault()
    this.toggleModal('active')
  }

  //close the modal by clicking on the container
  closerClickModal(e) {
    if (e.target === this.modalContainer) {
      this.toggleModal()
    }
  }

  //add events in elements of modal
  addModalEvent() {
    this.modalShow.addEventListener('click', this.eventToggleModal)
    this.modalCloser.addEventListener('click', this.eventToggleModal)
    this.modalContainer.addEventListener('click', this.closerClickModal)
  }

  init() {
    if (this.modalShow && this.modalCloser && this.modalContainer) {
      this.addModalEvent()
    }
    return this
  }
}
