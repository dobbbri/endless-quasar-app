import { auth } from '@/firebase/config'
import { useGetCollection } from '@/composables'
import { useNameSearch } from '@/composables'

export default function useGetPaymentMethods() {
  const { documents } = useGetCollection('paymentMethods', ['userId', '==', auth.currentUser.uid], ['name'])

  const { searchQuery, matchingSearchQuery: paymentMethods } = useNameSearch(documents)

  return { searchQuery, paymentMethods }
}
