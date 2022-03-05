import { auth } from 'src/firebase/config'
import { useGetCollection } from 'src/composables'
import { useNameSearch } from 'src/composables'

export default function useGetPaymentMethods() {
  const { documents } = useGetCollection('paymentMethods', ['userId', '==', auth.currentUser.uid], ['name'])

  const { searchQuery, matchingSearchQuery: paymentMethods } = useNameSearch(documents)

  return { searchQuery, paymentMethods }
}
