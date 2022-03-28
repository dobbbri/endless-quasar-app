import { collection, query, where, orderBy } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '@/firebase/config'
import { useGetCollection } from '@/composables'

export default function useGetProductsMovement(productId) {
  const auth = getAuth()

  const colRef = query(
    collection(db, 'productsMovement'),
    where('userId', '==', auth.currentUser.uid),
    where('productId', '==', productId),
    orderBy('timestamp')
  )

  const { loading, documents: movements } = useGetCollection(colRef)

  return { searchQuery, loading, movements }
}

// get total register
// db.collection('...').get().then(snap => {
//   res.status(200).send({length: snap.size});
// });
