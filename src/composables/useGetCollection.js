import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { useNotification } from '@/composables'
const { notify } = useNotification()

export default function useCollection(_collection, _where, _order, isASelect = false) {
  const documents = ref(null)
  const loading = ref(false)

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

  loading.value = true

  const unsub = onSnapshot(colRef,
    (snapshot) => {
      let results = []
      if (isASelect) {
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, name: doc.data().name, disabled: doc.data().disabled })
        })
      } else {
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id })
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
