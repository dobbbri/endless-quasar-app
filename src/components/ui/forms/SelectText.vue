<script setup>
import opts from '@/components/ui/options'

defineProps({
  options: Array
})
</script>

<template>
  <q-select v-bind="opts.forms.input" :options="options" emit-value options-dense />
</template>
