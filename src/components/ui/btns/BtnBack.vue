<script setup>
import opts from 'src/components/ui/options'
import useGoBack from 'src/composables/useGoBack'
</script>

<template>
  <q-btn v-bind="opts.btns.icon" icon="chevron_left" @click="useGoBack" />
</template>
