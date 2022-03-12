import App from './App.vue'
import router from '@/router'
import { store } from '@/stores/store'
import { vCleave } from '@/directives'

import { Quasar, Notify, Dialog } from 'quasar'
import quasarConfig from '@/quasar.config'
import quasarIconSet from 'quasar/icon-set/svg-material-icons'

import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/animate/slideInRight.css'
import '@quasar/extras/animate/slideOutRight.css'
import '@quasar/extras/animate/fadeIn.css'
import '@quasar/extras/animate/fadeOut.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import 'quasar/src/css/index.sass'

import '@/assets/scss/app.scss'

createApp(App)
  .provide('constants', readonly({ ADD: 'ADD', EDIT: 'EDIT' }))
  .provide('store', store)
  .use(router)
  .use(Quasar, { plugins: { Notify, Dialog }, iconSet: quasarIconSet, config: quasarConfig })
  .directive('cleave', vCleave)
  .mount('#app')
