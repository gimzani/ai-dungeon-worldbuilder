
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronUp,
  faChevronDown,
  faCheck,
  faEye,
  faTimes,
  faEllipsisH,
  faFileDownload,
  faGripVertical,
  faPlay,
  faPlus,
  faFile,
  faFileExport,
  faFolderOpen,
  faFolder,
  faFolderPlus,
  faSave,
  faSearch
} from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const Fonts = {
  install(Vue) {
    library.add(
      faChevronUp,
      faChevronDown,
      faCheck,
      faEye,
      faTimes,
      faEllipsisH,
      faFileDownload,
      faGripVertical,
      faPlay,
      faPlus,
      faFile,
      faFileExport,
      faFolderOpen,
      faFolder,
      faFolderPlus,
      faSave,
      faSearch
    );
    Vue.component('font-awesome-icon', FontAwesomeIcon);
  }
}

export default Fonts;