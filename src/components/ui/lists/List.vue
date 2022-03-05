<script setup>
import opts from 'src/components/ui/options'
</script>

<template>
  <q-list v-bind="opts.lists.list">
    <slot />
  </q-list>
</template>
