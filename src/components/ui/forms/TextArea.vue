<script setup>
import opts from '@/components/ui/options'
</script>

<template>
  <q-input
    v-bind="opts.forms.input"
    type="textarea"
    label-slot
    autogrow
  />
</template>
