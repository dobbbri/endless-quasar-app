<script setup>
import opts from 'src/components/ui/options'

defineProps({
  loading: Boolean
})
</script>

<template>
  <q-btn type="button" v-bind="opts.btns.basic" :loading="loading" :disable="loading" />
</template>
