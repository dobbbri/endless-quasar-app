import { addDoc } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { useNotification } from '@/composables'

export default function useFillCollections() {
  const error = ref(false)
  const loading = ref(false)
  const { notify } = useNotification()

  const addToCollection = async (collectionName, values) => {
    error.value = false
    loading.value = true

    await addDoc(collection(db, collectionName), values)
      .catch((err) => {
        error.value = true
        notify.error(`Erro ao adicionar ${collectionName}, ${values}`, err)
      })
      .finally(() => (loading.value = false))
  }

  return { error, loading, addToCollection }
}
