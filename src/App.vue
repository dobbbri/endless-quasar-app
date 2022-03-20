<script setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const auth = getAuth()

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (import.meta.env.DEV) console.info('User state change: ', user)
  } else {
    if (import.meta.env.DEV) console.info('User logout')
  }
})
</script>
<template>
  <router-view />
</template>
