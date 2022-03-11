import { getAuth, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth'
import { useNotification } from '@/composables'

export default function useUserSendEmail() {
  const sendError = ref(null)
  const { notify } = useNotification()

  const sendUserVerificationEmail = async () => {
    sendError.value = null
    const auth = getAuth()

    await sendEmailVerification(auth.currentUser)
      .then(() => {
        notify.success('Email de Verificação enviado!')
        notify.info('Acesse seu email e confirme!')
      })
      .catch((err) => {
        sendError.value = true
        notify.sendError('Erro ao enviar email', err)
      })
  }

  const sendUserPasswordResetEmail = async () => {
    sendError.value = false
    const auth = getAuth()

    await sendPasswordResetEmail(auth.currentUser)
      .then(() => {
        notify.success('Email de troca de senha enviado!')
        notify.success('Acesse seu email agora!')
      })
      .catch((err) => {
        sendError.value = true
        notify.sendError('Erro ao enviar email', err)
      })
  }

  return { sendError, sendUserVerificationEmail, sendUserPasswordResetEmail }
}
