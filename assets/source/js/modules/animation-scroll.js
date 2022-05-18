export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowHalf = window.innerHeight * 0.6

    this.checkDistance = this.checkDistance.bind(this)
  }

  //get distance each item in relation in a top the site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop
      return {
        element: section,
        offset: Math.floor(offset - this.windowHalf),
      }
    })
  }

  //checks the distance on each objectin relation to the site's scroll
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('active');
      } else if (item.element.classList.contains('active')) {
        item.element.classList.remove('active');
      }
    });
  }


  init() {
    if (this.sections.length) {
      this.getDistance()
      this.checkDistance()
      window.addEventListener('scroll', this.checkDistance)
    }
    return this
  }

  //remove scroll event
  stop() {
    window.removeEventListener('scroll', this.checkDistance)
  }
}
