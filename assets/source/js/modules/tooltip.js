export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips)

    //bind of object of class to callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  //create tooltipBox and append to body
  createTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')

    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    this.tooltipBox = tooltipBox
  }

  //moves the tooltip based on its styles according to mouse position
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`
    }
  }

  //remove the tooltip and the events and mousemove and mouseleave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove()
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave)
    currentTarget.removeEventListener('mousemove', this.onMouseMove)
  }

  //create the tooltip and to add events adnd mousemove and mouseleave to the target
  onMouseOver({ currentTarget }) {
    //create tooltipBox and append in a properties
    this.createTooltipBox(currentTarget)

    currentTarget.addEventListener('mousemove', this.onMouseMove)
    currentTarget.addEventListener('mouseleave', this.onMouseLeave)
  }

  //to add the events the mouseover the every tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver)
    })
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent()
    }
    return this
  }
}
