import SoftScroll from './modules/soft-scroll.js'
import initAnimationScroll from './modules/animation-scroll.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tabnav.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import initDropdown from './modules/dropdown.js'
import initMenuMobile from './modules/menu-mobile.js'
import initDateObject from './modules/date-object.js'
import fetchAnimal from './modules/fetch-animal.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'

const softScroll = new SoftScroll('[data-menu="soft"] a[href^="#"]')
softScroll.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal('[data-modal="show"]', '[data-modal="closer"]', '[data-modal="modal"]')
modal.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

fetchAnimal('../../assets/source/js/vendor/api-animal.json', '.grid-number')

fetchBitcoin('https://blockchain.info/ticker', '.btc-price')

initAnimationScroll()
initDropdown()
initMenuMobile()
initDateObject()
