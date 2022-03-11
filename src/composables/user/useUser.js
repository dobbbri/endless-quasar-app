import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
  updateProfile
} from 'firebase/auth'
import { useValidation, useNotification } from '@/composables'

export default function useUser() {
  const error = ref(false)
  const loading = ref(false)
  const { rules } = useValidation()
  const { notify } = useNotification()

  const userSignIn = async (user) => {
    error.value = false
    loading.value = true
    const auth = getAuth()

    await signInWithEmailAndPassword(auth, user.email, user.password)
      .catch((err) => {
        error.value = true
        switch (err.code) {
          case 'auth/invalid-email':
            notify.error('Email inválido', err)
            break
          case 'auth/user-not-found':
            notify.error('Email não localizado', err)
            break
          case 'auth/wrong-password':
            notify.error('Senha inválida', err)
            break
          default:
            notify.error('Credenciais inválidas', err)
            break
        }
      })
      .finally(() => (loading.value = false))
  }

  const userSignUp = async (user) => {
    error.value = false
    loading.value = true
    const auth = getAuth()

    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .catch((err) => {
        error.value = true
        notify.error('Credenciais inválidas', err)
      })
      .finally(() => (loading.value = false))
  }

  const editUserProfile = async (user) => {
    error.value = false
    loading.value = true
    const auth = getAuth()

    await updateProfile(auth.currentUser, user)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao alterar o usuário', err)
      })
      .finally(() => (loading.value = false))
  }

  const userSignOut = async () => {
    loading.value = true
    const auth = getAuth()

    await signOut(auth)
      .catch((err) => console.info('signOut error: ', err.message))
      .finally(() => (loading.value = false))
  }

  onMounted(() => userSignOut())

  return { error, loading, rules, userSignIn, userSignUp, userSignOut, editUserProfile }
}
