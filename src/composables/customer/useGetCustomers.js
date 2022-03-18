import { collection, query, where, orderBy } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '@/firebase/config'
import { useGetCollection } from '@/composables'
import { useNameSearch } from '@/composables'

export default function useGetCustomers() {
  const auth = getAuth()

  const colRef = query(
    collection(db, 'customers'),
    where('userId', '==', auth.currentUser.uid),
    orderBy('name')
  )

  const { loading, documents } = useGetCollection(colRef)

  const { searchQuery, matchingSearchQuery: customers } = useNameSearch(documents)

  return { searchQuery, loading, customers }
}
