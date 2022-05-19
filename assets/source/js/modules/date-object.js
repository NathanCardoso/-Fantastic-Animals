export default class DateObject {
  constructor(date, activeClass) {
    this.date = document.querySelector(date)
    this.activeClass = activeClass
  }

  operatingData() {
    this.dayWek = this.date.dataset.wek.split(',').map(Number)
    this.scheduleWek = this.date.dataset.time.split(',').map(Number)
  }

  newData() {
    this.dateNow = new Date()
    this.dayNow = this.dateNow.getDay()
    this.scheduleNow = this.dateNow.getUTCHours() - 3
  }

  open() {
    const wekOpen = this.dayWek.indexOf(this.dayNow) !== -1
    const scheduleOpen = (this.scheduleNow >= this.scheduleWek[0]
    && this.scheduleNow < this.scheduleWek[1])

    return wekOpen && scheduleOpen
  }

  activeOpen() {
    if (this.open()) {
      this.date.classList.add(this.activeClass)
    }
  }

  init() {
    if (this.operatingData) {
      this.operatingData()
      this.newData()
      this.activeOpen()
    }
    return this
  }
}
