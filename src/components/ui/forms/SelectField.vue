<script setup>
import opts from '@/components/ui/options'
const props = defineProps({
  label: String,
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
    label-slot
  >
    <template #label>
      <text-label :label="props.label" />
    </template>
  </q-select>
</template>
