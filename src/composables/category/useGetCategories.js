import { auth } from '@/firebase/config'
import { useGetCollection } from '@/composables'
import { useNameSearch } from '@/composables'

export default function useGetCategories(isASelect = false) {
  const { loading, documents } = useGetCollection('categories', ['userId', '==', auth.currentUser.uid], ['name'], isASelect)

  if (isASelect) return { documents }

  const { searchQuery, matchingSearchQuery: categories } = useNameSearch(documents)
  return { searchQuery, loading, categories }
}
