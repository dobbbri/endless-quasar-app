<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth()
const store = inject('store')

onAuthStateChanged(auth, (user) => {
  if (user) {
    store.setUser({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      uid: user.uid
    })
    if (import.meta.env.DEV) console.info('User state change: ', store.user)
  } else {
    store.logout()
    if (import.meta.env.DEV) console.info('User logout')
  }
})
</script>
<template>
  <router-view />
</template>
