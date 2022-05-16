import SoftScroll from './modules/soft-scroll.js'
import initAnimationScroll from './modules/animation-scroll.js'
import Accordion from './modules/accordion.js'
import initTabNav from './modules/tabnav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropdown from './modules/dropdown.js'
import initMenuMobile from './modules/menu-mobile.js'
import initDateObject from './modules/date-object.js'
import initFetchAnimal from './modules/fetch-animal.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'

const softScroll = new SoftScroll('[data-menu="soft"] a[href^="#"]')
softScroll.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

initAnimationScroll()
initTabNav()
initModal()
initTooltip()
initDropdown()
initMenuMobile()
initDateObject()
initFetchAnimal()
initFetchBitcoin()
