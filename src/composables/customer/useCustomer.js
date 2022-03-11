import { collection, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db, auth } from '@/firebase/config'
import { useValidation, useNotification } from '@/composables'

export default function useCustomer() {
  const error = ref(false)
  const loading = ref(false)
  const { rules } = useValidation()
  const { notify } = useNotification()

  const addCustomer = async (customer) => {
    error.value = false
    loading.value = true

    customer.userId = auth.currentUser.uid

    await addDoc(collection(db, 'customers'), customer)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao adicionar o cliente', err)
      })
      .finally(() => (loading.value = false))
  }

  const editCustomer = async (customer, id) => {
    error.value = false
    loading.value = true

    const docRef = doc(db, 'customers', id)

    await updateDoc(docRef, customer)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao alterar o cliente', err)
      })
      .finally(() => (loading.value = false))
  }

  const deleteCustomer = async (id) => {
    error.value = false
    loading.value = true

    const docRef = doc(db, 'customers', id)

    await deleteDoc(docRef)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao excluir o cliente', err)
      })
      .finally(() => (loading.value = false))
  }

  return { error, loading, rules, addCustomer, editCustomer, deleteCustomer }
}
