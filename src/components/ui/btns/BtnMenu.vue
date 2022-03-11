<script setup>
import opts from '@/components/ui/options'
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template>
  <q-btn v-bind="opts.btns.icon" icon="menu" @click="store.setIsOpenSidebar(true)" />
</template>
