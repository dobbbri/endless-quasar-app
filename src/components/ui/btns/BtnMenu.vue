<script setup>
import opts from 'src/components/ui/options'
import { useStore } from 'src/stores/store'

const store = useStore()
</script>

<template>
  <q-btn v-bind="opts.btns.icon" icon="menu" @click="store.setIsOpenSidebar(true)" />
</template>
