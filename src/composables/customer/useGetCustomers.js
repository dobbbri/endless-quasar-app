import { getAuth } from 'firebase/auth'
import { useGetCollection } from '@/composables'
import { useNameSearch } from '@/composables'

export default function useGetCustomers() {
    const auth = getAuth()
  const { documents } = useGetCollection('customers', ['userId', '==', auth.currentUser.uid], ['name'])

  const { searchQuery, matchingSearchQuery: customers } = useNameSearch(documents)

  return { searchQuery, customers }
}
