<script setup>
import opts from '@/components/ui/options'
</script>

<template>
  <q-item v-bind="opts.lists.item">
    <slot />
  </q-item>
</template>
