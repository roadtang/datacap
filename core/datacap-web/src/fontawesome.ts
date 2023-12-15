import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faAnglesLeft,
  faAnglesRight,
  faArrowDown19,
  faArrowDown91,
  faArrowLeft,
  faArrowRight,
  faArrowUp19,
  faArrowUpAZ,
  faCircle,
  faCircleInfo,
  faCircleMinus,
  faCirclePlus,
  faClock,
  faClone,
  faColumns,
  faDatabase,
  faDeleteLeft,
  faDiagramPredecessor,
  faDroplet,
  faEye,
  faFileExport,
  faFilter,
  faFlag,
  faFont,
  faGear,
  faInfoCircle,
  faKey,
  faMagnifyingGlass,
  faMinus,
  faPenToSquare,
  faPlus,
  faRepeat,
  faRotate,
  faSave,
  faSquarePen,
  faSun,
  faTable,
  faTablet,
  faTextHeight,
  faTimes,
  faTrash,
  faTrashCan,
  faUpload
} from '@fortawesome/free-solid-svg-icons'

/**
 * Creates icons for the given app.
 *
 * @param {any} app - The app object.
 */
const createIcons = (app: any) => {
  library.add(faArrowRight,
    faCirclePlus,
    faPenToSquare,
    faSquarePen,
    faSave,
    faCircleMinus,
    faRotate,
    faTrashCan,
    faFileExport,
    faInfoCircle,
    faDiagramPredecessor,
    faDeleteLeft,
    faTrash,
    faClone,
    faPlus,
    faTablet,
    faMinus,
    faUpload,
    faEye,
    faArrowUp19,
    faArrowDown91,
    faFlag,
    faMagnifyingGlass,
    faArrowDown19,
    faGear,
    faAnglesLeft,
    faAnglesRight,
    faFilter,
    faDatabase,
    faTable,
    faColumns,
    faKey,
    faRepeat,
    faDroplet,
    faCircle,
    faCircleInfo,
    faTimes,
    faClock,
    faFont,
    faArrowUpAZ,
    faSun,
    faTextHeight,
    faArrowLeft)
  app.component('FontAwesomeIcon', FontAwesomeIcon)
}

export {
  createIcons
}
