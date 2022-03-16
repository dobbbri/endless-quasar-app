<script setup>
import opts from '@/components/ui/options'
</script>

<template>
  <q-input v-bind="opts.forms.input" type="tel" mask="#" fill-mask="0" reverse-fill-mask />
</template>
