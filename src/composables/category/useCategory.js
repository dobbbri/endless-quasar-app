import { collection, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db, auth } from '@/firebase/config'
import { useValidation, useNotification } from '@/composables'

export default function useCategory() {
  const error = ref(false)
  const loading = ref(false)
  const { rules } = useValidation()
  const { notify } = useNotification()

  const addCategory = async (category) => {
    error.value = false
    loading.value = true

    category.userId = auth.currentUser.uid

    await addDoc(collection(db, 'categories'), category)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao adicionar categoria', err)
      })
      .finally(() => (loading.value = false))
  }

  const editCategory = async (category, id) => {
    error.value = false
    loading.value = true

    const docRef = doc(db, 'categories', id)

    await updateDoc(docRef, category)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao alterar categoria', err)
      })
      .finally(() => (loading.value = false))
  }

  const deleteCategory = async (id) => {
    error.value = false
    loading.value = true

    const docRef = doc(db, 'categories', id)

    await deleteDoc(docRef)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao excluir a categoria', err)
      })
      .finally(() => (loading.value = false))
  }

  return { error, loading, rules, addCategory, editCategory, deleteCategory }
}
