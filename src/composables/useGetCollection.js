import { onSnapshot, getDoc } from 'firebase/firestore'
import { useNotification } from '@/composables'
const { notify } = useNotification()

export default function useCollection(colRef, onlyIdAndName = false) {
  const documents = ref(null)
  const loading = ref(true)

  const unsub = onSnapshot(
    colRef,
    (snapshot) => {
      let results = []
      if (onlyIdAndName) {
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
          results.push(data)
        })
      }
      documents.value = results
    },
    (err) => {
      notify.error('Erro ao obter dados da coleção', err)
    }
  )

  loading.value = false

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { loading, documents }
}
