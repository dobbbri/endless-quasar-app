import { collection, query, where, orderBy } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '@/firebase/config'
import { useGetCollection } from '@/composables'

export default function useGetCategoriesForSelect() {
  const auth = getAuth()

  const colRef = query(collection(db, 'categories'), where('userId', '==', auth.currentUser.uid), orderBy('name'))

  const { documents: categories } = useGetCollection(colRef, 'categories/')

  return { categories }
}
