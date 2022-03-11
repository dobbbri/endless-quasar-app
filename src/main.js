import App from './App.vue'
import router from '@/router'
import { vCleave } from '@/directives'
import { Quasar, Notify, Dialog } from 'quasar'
import quasarConfig from '@/quasar.config'

import materialIconSet from 'quasar/icon-set/svg-material-icons'
import '@quasar/extras/material-icons/material-icons.css'

import '@quasar/extras/animate/slideInRight.css'
import '@quasar/extras/animate/slideOutRight.css'
import '@quasar/extras/animate/fadeIn.css'
import '@quasar/extras/animate/fadeOut.css'

import '@quasar/extras/roboto-font/roboto-font.css'

import 'quasar/src/css/index.sass'
import '@/assets/scss/app.scss'

const myApp = createApp(App)
myApp.use(router)
myApp.use(createPinia())
myApp.use(Quasar, { plugins: { Notify, Dialog }, iconSet: materialIconSet, config: quasarConfig })
myApp.directive('cleave', vCleave)
myApp.mount('#app')
