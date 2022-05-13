export default function initDateObject() {
  const operation = document.querySelector('[data-wek]')
  const dayWek = operation.dataset.wek.split(',').map(Number)
  const scheduleWek = operation.dataset.time.split(',').map(Number)

  const dateNow = new Date()
  const dayNow = dateNow.getDay()
  const scheduleNow = dateNow.getHours()

  const wekOpen = dayWek.indexOf(dayNow) !== -1
  const scheduleOpen = (scheduleNow >= scheduleWek[0] && scheduleNow < scheduleWek[1])

  if (wekOpen && scheduleOpen) {
    operation.classList.add('open')
  }
}
