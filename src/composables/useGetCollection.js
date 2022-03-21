import { onSnapshot, getDoc } from 'firebase/firestore'
import { useNotification } from '@/composables'
const { notify } = useNotification()

export default function useCollection(colRef, isForSelect = false) {
  const documents = ref(null)
  const loading = ref(true)

  const unsub = onSnapshot(colRef, (snapshot) => {
    let results = []
    if (isForSelect) {
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, name: doc.data().name })
      })
    } else {
      snapshot.docs.forEach(async (doc) => {
        let data = { ...doc.data(), id: doc.id }
        if (data.categoryRef) {
          const catSnap = await getDoc(data.categoryRef)
          if (catSnap.exists()) {
            data.refs = {category: { id: catSnap.id, name: catSnap.data().name }}
          }
        }
        results.push(data)
      })
    }
    documents.value = results
  },
    (err) => {
      notify.error('Erro ao obter as categorias', err)
    })

  loading.value = false

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { loading, documents }
}
