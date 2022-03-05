import { ionClose } from '@quasar/extras/ionicons-v6'

const config = {
  dark: 'false',
  notify: {
    position: 'top',
    color: 'dark',
    iconSize: 'md',
    textColor: 'white',
    progress: true,
    actions: [{ icon: ionClose, color: 'white', rounded: true, dense: true }]
  }
}

export default config
