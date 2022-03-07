import { collection, doc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db, auth } from 'src/firebase/config'
import { useValidation, useNotification, useStorage } from 'src/composables'

export default function useUpdateProduct() {
  const error = ref(false)
  const loading = ref(false)
  const { rules } = useValidation()
  const { notify } = useNotification()
  const { uploadImage, image, uploadError } = useStorage()

  const addProduct = async (product, file) => {
    loading.value = true
    error.value = false
    product.userId = auth.currentUser.uid

    if (file) {
      await uploadImage(file)
      if (uploadError.value) return
      product.image = image
    }

    await addDoc(collection(db, 'products'), product)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao adicionar produto', err)
      })
      .finally(() => (loading.value = false))
  }

  const editProduct = async (product, file, id) => {
    loading.value = true
    error.value = false

    if (file) {
      await uploadImage(file)
      if (uploadError.value) return
      product.image = image
    }

    const docRef = doc(db, 'products', id)

    await updateDoc(docRef, product)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao alterar produto', err)
      })
      .finally(() => (loading.value = false))
  }

  const deleteProduct = async (id) => {
    error.value = false
    loading.value = true

    const docRef = doc(db, 'products', id)

    await deleteDoc(docRef)
      .catch((err) => {
        error.value = true
        notify.error('Erro ao excluir o produto', err)
      })
      .finally(() => (loading.value = false))
  }

  return { error, loading, rules, addProduct, editProduct, deleteProduct }
}
