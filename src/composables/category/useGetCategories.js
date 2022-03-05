import { auth } from 'src/firebase/config'
import { useGetCollection } from 'src/composables'
import { useNameSearch } from 'src/composables'

export default function useGetCategories() {
  const { loading, documents } = useGetCollection('categories', ['userId', '==', auth.currentUser.uid], ['name'])

  const { searchQuery, matchingSearchQuery: categories } = useNameSearch(documents)

  return { searchQuery, loading, categories }
}
