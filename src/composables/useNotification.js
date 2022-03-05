import { Notify } from 'quasar'
import { ionCheckmarkCircle, ionCloseCircle, ionInformationCircle } from '@quasar/extras/ionicons-v6'

export default function useNotification() {
  const notify = {
    show: (message, timeout = 4000) => {
      Notify.create({
        message: message,
        timeout: timeout,
        iconColor: 'info',
        icon: ionInformationCircle
      })
    },
    success: (message, timeout = 2000) => {
      Notify.create({ message: message, timeout: timeout, iconColor: 'positive', icon: ionCheckmarkCircle })
    },
    error: (message, err, timeout = 1000000) => {
      Notify.create({
        message: message,
        timeout: timeout,
        iconColor: 'negative',
        icon: ionCloseCircle,
        progress: false
      })
      if (import.meta.env.DEV) console.info(`error: ${err.code} - ${err.message}`)
    }
  }

  return { notify }
}
