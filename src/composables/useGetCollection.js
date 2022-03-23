import { onSnapshot, getDoc } from 'firebase/firestore'
import { useNotification } from '@/composables'
const { notify } = useNotification()

export default function useCollection(colRef, collectionName = null) {
  const documents = ref(null)
  const loading = ref(true)

  const unsub = onSnapshot(
    colRef,
    (snapshot) => {
      let results = []
      if (collectionName) {
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, name: doc.data().name })
        })
      } else {
        snapshot.docs.forEach(async (doc) => {
          let data = { ...doc.data(), id: doc.id, ref: {} }
          if (data.categoryRef) {
            const categorySnap = await getDoc(data.categoryRef)
            if (categorySnap.exists()) {
              data.ref['category'] = { name: categorySnap.data().name }
            }
          }
          if (data.saleUnityRef) {
            const saleUnitySnap = await getDoc(data.saleUnityRef)
            if (saleUnitySnap.exists()) {
              data.ref['saleUnity'] = { name: saleUnitySnap.data().name }
            }
          }
          if (data.serviceUnityRef) {
            const serviceUnitySnap = await getDoc(data.serviceUnityRef)
            if (serviceUnitySnap.exists()) {
              data.ref['serviceUnity'] = { name: serviceUnitySnap.data().name }
            }
          }
          if (data.documentTypeRef) {
            const documentTypeSnap = await getDoc(data.documentTypeRef)
            if (documentTypeSnap.exists()) {
              data.ref['documentType'] = { name: documentTypeSnap.data().name }
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
