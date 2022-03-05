import { auth } from 'src/firebase/config'
import { useGetCollection } from 'src/composables'
import { useNameSearch } from 'src/composables'

export default function useGetCustomers() {
  const { documents } = useGetCollection('customers', ['userId', '==', auth.currentUser.uid], ['name'])

  const { searchQuery, matchingSearchQuery: customers } = useNameSearch(documents)

  return { searchQuery, customers }
}
