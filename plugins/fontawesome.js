import Vue from 'vue'

import { library,config } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// config.autoAddCss = false

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.use(FontAwesomeIcon, {
//     componentPrefix: 'font-awesome-icon'
// })
