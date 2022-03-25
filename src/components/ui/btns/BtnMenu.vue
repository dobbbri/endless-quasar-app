<script setup>
import opts from '@/components/ui/options'

const store = inject('store')
</script>

<template>
  <q-btn
    v-bind="opts.btns.icon"
    icon="menu"
    @click="store.setIsOpenSidebar(true)"
  />
</template>
