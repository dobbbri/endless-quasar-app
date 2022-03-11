<script setup>
import opts from '@/components/ui/options'
import useGoBack from '@/composables/useGoBack'
</script>

<template>
  <q-btn v-bind="opts.btns.form" label="CANCELAR" @click="useGoBack" />
</template>
