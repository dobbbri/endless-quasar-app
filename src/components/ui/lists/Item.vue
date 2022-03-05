<script setup>
import opts from 'src/components/ui/options'
</script>

<template>
  <q-item v-bind="opts.lists.item">
    <slot />
  </q-item>
</template>
