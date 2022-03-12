import {  getAuth} from 'firebase/auth'
import { useGetCollection } from '@/composables'
import { useNameSearch } from '@/composables'

export default function useGetCategories(isASelect = false) {
  const auth = getAuth()
  const { loading, documents } = useGetCollection('categories', ['userId', '==', auth.currentUser.uid], ['name'], isASelect)

  if (isASelect) return { documents }

  const { searchQuery, matchingSearchQuery: categories } = useNameSearch(documents)
  return { searchQuery, loading, categories }
}
