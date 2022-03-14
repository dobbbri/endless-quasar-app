<script setup>
import opts from '@/components/ui/options'

const props = defineProps({
  label: String
})
</script>

<template>
  <q-input v-bind="opts.forms.input" type="tel" mask="#" fill-mask="0" reverse-fill-mask label-slot>
    <template #label>
      <text-label :label="props.label" />
    </template>
  </q-input>
</template>
