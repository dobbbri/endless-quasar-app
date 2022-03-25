<script setup>
import opts from '@/components/ui/options'

defineProps({
  loading: Boolean
})
</script>

<template>
  <q-btn
    v-bind="opts.btns.form"
    label="GRAVAR"
    :loading="loading"
    :disable="loading"
  />
</template>
