<script setup>
import opts from '@/components/ui/options'

defineProps({
  name: String,
  size: String
})
</script>

<template>
  <q-icon v-bind="opts.utils.icon" :name="name" :size="size" />
</template>
