import { collection, doc, addDoc, deleteDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '@/firebase/config'
import { useNotification } from '@/composables'

export default function useProductMovement() {
  const auth = getAuth()
  const error = ref(false)
  const loading = ref(false)
  const { notify } = useNotification()

  const addProductMovement = async (productMovement) => {
    loading.value = true
    error.value = false

    productMovement.userId = auth.currentUser.uid

    await addDoc(collection(db, 'productsMovement'), productMovement)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao adicionar a movimentação do produto', err)
      })
      .finally(() => (loading.value = false))
  }

  const deleteProductMovement = async (id) => {
    error.value = false
    loading.value = true

    product.userId = auth.currentUser.uid
    const docRef = doc(db, 'productsMovement', id)

    // ---
    const moviments = await firestore.collection('messages').where('text', '==', '').get()
    const batch = firestore.batch()
    moviments.forEach((doc) => {
      batch.delete(doc.ref)
    })
    await batch.commit()
    // ---

    await deleteDoc(docRef)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao excluir a movimentação do produto', err)
      })
      .finally(() => (loading.value = false))
  }

  return { error, loading, rules, addProductMovement, deleteProductMovement }
}
