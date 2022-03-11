<script setup>
import opts from '@/components/ui/options'

const props = defineProps({
  label: String
})
</script>

<template>
  <q-input
    v-cleave="{
      numeral: true,
      numeralDecimalMark: ',',
      delimiter: '.'
    }"
    v-bind="opts.forms.input"
    label-slot
  >
    <template #label>
      <text-label :label="props.label" />
    </template>
  </q-input>
</template>
