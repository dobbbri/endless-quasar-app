import { collection, query, where, orderBy } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '@/firebase/config'
import { useGetCollection } from '@/composables'
import { useNameSearch } from '@/composables'

export default function useGetProducts() {
  const auth = getAuth()

  const colRef = query(
    collection(db, 'products'),
    where('userId', '==', auth.currentUser.uid),
    orderBy('name')
  )

  const { loading, documents } = useGetCollection(colRef)

  const { searchQuery, matchingSearchQuery: products } = useNameSearch(documents)

  return { searchQuery, loading, products }
}

// get total register
// db.collection('...').get().then(snap => {
//   res.status(200).send({length: snap.size});
// });
