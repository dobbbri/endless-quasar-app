import App from './App.vue'
import router from 'src/router'
import { vCleave } from 'src/directives'
import { Quasar, Notify, Dialog } from 'quasar'
import quasarConfig from 'src/quasar.config'

// Import icon libraries
import materialIconSet from 'quasar/icon-set/svg-material-icons'
// import ionIconSet from 'quasar/icon-set/svg-ionicons-v6'
import '@quasar/extras/material-icons/material-icons.css'

import '@quasar/extras/animate/slideInRight.css'
import '@quasar/extras/animate/slideOutRight.css'
import '@quasar/extras/animate/fadeIn.css'
import '@quasar/extras/animate/fadeOut.css'

import '@quasar/extras/roboto-font/roboto-font.css'

import 'quasar/src/css/index.sass'
import 'src/assets/scss/app.scss'

const myApp = createApp(App)
myApp.use(router)
myApp.use(createPinia())
myApp.use(Quasar, { plugins: { Notify, Dialog }, iconSet: { materialIconSet }, config: quasarConfig })
myApp.directive('cleave', vCleave)
myApp.mount('#app')
