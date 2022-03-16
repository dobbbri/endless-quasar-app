<!-- todo -->
<!-- https://quasar.dev/vue-components/select#filtering-and-autocomplete -->
<script setup>
import opts from '@/components/ui/options'

defineProps({
  options: Array
})
</script>

<template>
  <q-select
    v-bind="opts.forms.input"
    :options="options"
    option-value="id"
    option-label="name"
    option-disable="disabled"
    emit-value
    map-options
  />
</template>
