import { getAuth } from 'firebase/auth'
import { useGetCollection } from '@/composables'
import { useNameSearch } from '@/composables'

export default function useGetPaymentMethods() {
  const auth = getAuth()
  const { documents } = useGetCollection('paymentMethods', ['userId', '==', auth.currentUser.uid], ['name'])

  const { searchQuery, matchingSearchQuery: paymentMethods } = useNameSearch(documents)

  return { searchQuery, paymentMethods }
}
