import { collection, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '@/firebase/config'
import { useValidation, useNotification } from '@/composables'

export default function usePaymentMethod() {
  const auth = getAuth()
  const error = ref(false)
  const loading = ref(false)
  const { rules } = useValidation()
  const { notify } = useNotification()

  const addPaymentMethod = async (paymentMethod) => {
    error.value = false
    loading.value = true

    paymentMethod.userId = auth.currentUser.uid

    await addDoc(collection(db, 'paymentMethods'), paymentMethod)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao adicionar o método de pagamento', err)
      })
      .finally(() => (loading.value = false))
  }

  const editPaymentMethod = async (paymentMethod, id) => {
    error.value = false
    loading.value = true

    const docRef = doc(db, 'paymentMethods', id)

    await updateDoc(docRef, paymentMethod)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao alterar o método de pagamento', err)
      })
      .finally(() => (loading.value = false))
  }

  const deletePaymentMethod = async (id) => {
    error.value = false
    loading.value = true

    const docRef = doc(db, 'paymentMethods', id)

    await deleteDoc(docRef)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao excluir o método de pagamento', err)
      })
      .finally(() => (loading.value = false))
  }

  return { error, loading, rules, addPaymentMethod, editPaymentMethod, deletePaymentMethod }
}
