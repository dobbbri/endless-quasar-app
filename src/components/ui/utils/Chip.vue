<script setup>
import opts from '@/components/ui/options'

defineProps({
  color: String
})
</script>

<template>
  <q-chip v-bind="opts.utils.chip" :color="color">
    <slot />
  </q-chip>
</template>
