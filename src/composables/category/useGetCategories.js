import { collection, query, where, orderBy } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '@/firebase/config'
import { useGetCollection } from '@/composables'
import { useNameSearch } from '@/composables'

export default function useGetCategories() {
  const auth = getAuth()

  const colRef = query(collection(db, 'categories'), where('userId', '==', auth.currentUser.uid), orderBy('name'))

  const { loading, documents } = useGetCollection(colRef)

  const { searchQuery, matchingSearchQuery: categories } = useNameSearch(documents)

  return { searchQuery, loading, categories }
}
