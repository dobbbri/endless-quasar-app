<script setup>
import opts from 'src/components/ui/options'

defineProps({
  label: String
})
</script>

<template>
  <q-toggle :label="label" v-bind="opts.forms.toggle" />
</template>
