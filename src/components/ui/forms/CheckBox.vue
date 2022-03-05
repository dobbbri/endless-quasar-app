<script setup>
import opts from 'src/components/ui/options'

defineProps({
  label: String
})
</script>

<template>
  <q-checkbox :label="label" v-bind="opts.forms.checkbox" />
</template>
