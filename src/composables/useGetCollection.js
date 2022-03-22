import { onSnapshot, getDoc } from 'firebase/firestore'
import { useNotification } from '@/composables'
const { notify } = useNotification()

export default function useCollection(colRef, referencePath = null) {
  const documents = ref(null)
  const loading = ref(true)

  const unsub = onSnapshot(
    colRef,
    (snapshot) => {
      let results = []
      if (referencePath) {
        snapshot.docs.forEach((doc) => {
          results.push({ id: referencePath + doc.id, name: doc.data().name })
        })
      } else {
        snapshot.docs.forEach(async (doc) => {
          let data = { ...doc.data(), id: doc.id }
          if (data.categoryRef) {
            const categorySnap = await getDoc(data.categoryRef)
            if (categorySnap.exists()) {
              data['category'] = { name: categorySnap.data().name }
            }
          } else if (data.saleUnityRef) {
            const saleUnitySnap = await getDoc(data.saleUnityRef)
            if (saleUnitySnap.exists()) {
              data['saleUnity'] = { name: saleUnitySnap.data().name }
            }
          } else if (data.serviceUnityRef) {
            const serviceUnitySnap = await getDoc(data.serviceUnityRef)
            if (serviceUnitySnap.exists()) {
              data['serviceUnity'] = { name: serviceUnitySnap.data().name }
            }
          } else if (data.documentTypeRef) {
            const documentTypeSnap = await getDoc(data.documentTypeRef)
            if (documentTypeSnap.exists()) {
              data['documentType'] = { name: documentTypeSnap.data().name }
            }
          }
          results.push(data)
        })
      }
      documents.value = results
    },
    (err) => {
      notify.error('Erro ao obter as categorias', err)
    }
  )

  loading.value = false

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { loading, documents }
}
