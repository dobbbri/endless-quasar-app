import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { db } from 'src/firebase/config'
import { useNotification } from 'src/composables'
const { notify } = useNotification()

export default function useCollection(_collection, _where, _order) {
  const documents = ref(null)
  const loading = ref(true)

  try {
    let colRef = collection(db, _collection)

    if (_where) {
      if (_order) {
        colRef = query(colRef, where(..._where), orderBy(..._order))
      } else {
        colRef = query(colRef, where(..._where))
      }
    } else if (_order) {
      colRef = query(colRef, orderBy(..._order))
    }

    const unsub = onSnapshot(colRef, (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id })
      })
      documents.value = results
    })

    watchEffect((onInvalidate) => {
      onInvalidate(() => unsub())
    })
  } catch (err) {
    notify.error('Erro ao obter as categorias', err)
  } finally {
    loading.value = false
  }

  return { loading, documents }
}
