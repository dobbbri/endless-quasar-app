<script setup>
import opts from '@/components/ui/options'
</script>

<template>
  <q-chip v-bind="opts.utils.chip">
    <slot />
  </q-chip>
</template>
