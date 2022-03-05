import { auth } from 'src/firebase/config'
import { useGetCollection } from 'src/composables'
import { useNameSearch } from 'src/composables'

export default function useGetProducts() {
  const { documents } = useGetCollection('products', ['userId', '==', auth.currentUser.uid], ['name'])

  const { searchQuery, matchingSearchQuery: products } = useNameSearch(documents)

  return { searchQuery, products }
}

// get total register
// db.collection('...').get().then(snap => {
//   res.status(200).send({length: snap.size});
// });
