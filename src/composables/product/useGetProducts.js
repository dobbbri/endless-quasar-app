import { getAuth } from 'firebase/auth'
import { useGetCollection } from '@/composables'
import { useNameSearch } from '@/composables'

export default function useGetProducts() {
  const auth = getAuth()
  const { documents } = useGetCollection('products', ['userId', '==', auth.currentUser.uid], ['name'])

  const { searchQuery, matchingSearchQuery: products } = useNameSearch(documents)

  return { searchQuery, products }
}

// get total register
// db.collection('...').get().then(snap => {
//   res.status(200).send({length: snap.size});
// });
