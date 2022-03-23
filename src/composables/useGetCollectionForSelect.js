import { collection, query, where, orderBy } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '@/firebase/config'
import { useGetCollection } from '@/composables'

export default function useGetCollectionForSelect(collectionName) {
  const auth = getAuth()

  const colRef = query(collection(db, collectionName), where('userId', '==', auth.currentUser.uid), orderBy('name'))

  const { documents } = useGetCollection(colRef, collectionName)

  return { documents }
}
