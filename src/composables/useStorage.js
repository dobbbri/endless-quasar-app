import { uid } from 'quasar'
import { auth, storage } from 'src/firebase/config'
import { uploadBytes, getDownloadURL, deleteObject, ref as firebaseRef } from 'firebase/storage'
import { useNotification } from 'src/composables'

export default function useImageUpload() {
  const { notify } = useNotification()
  const uploadError = ref(false)
  const currentUser = ref(auth.currentUser)
  const image = reactive({
    url: '',
    path: ''
  })

  const uploadImage = async (file, folder = 'images') => {
    uploadError.value = false

    image.path = `${folder}/${currentUser.value.uid}/${uid()}.jpg`
    const imageRef = firebaseRef(storage, image.path)

    await uploadBytes(imageRef, file, { contentType: 'image/jpeg' })
      .then(() => console.log('uploaded...'))
      .catch((err) => {
        uploadError.value = true
        notify.error('Erro ao subir a imagem', err)
      })

    await getDownloadURL(imageRef)
      .then((url) => (image.url = url))
      .catch((err) => {
        uploadError.value = true
        notify.error('Erro ao obter a url da imagem', err)
      })
  }

  const deleteImage = async (path) => {
    uploadError.value = false
    const imageRef = storage.ref(path)

    await deleteObject(imageRef)
      .then(() => console.log('deleted...'))
      .catch((err) => {
        uploadError.value = true
        notify.error('Erro ao excluir a imagem', err)
      })
  }

  return {
    uploadImage,
    deleteImage,
    image,
    uploadError
  }
}
