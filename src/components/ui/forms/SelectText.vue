<script setup>
import opts from '@/components/ui/options'

const props = defineProps({
  label: String,
  options: Array
})
</script>

<template>
  <q-select v-bind="opts.forms.input" :options="options" emit-value options-dense label-slot>
    <template #label>
      <text-label :label="props.label" />
    </template>
  </q-select>
</template>
