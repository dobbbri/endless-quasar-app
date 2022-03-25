<script setup>
import opts from '@/components/ui/options'

const mask = ref('(##)####-#####')

const setMask = (e) => {
  mask.value = e.target.value.length > 13 ? '(##)#####-####' : '(##)####-#####'
}
</script>

<template>
  <q-input
    v-bind="opts.forms.input"
    type="tel"
    :mask="mask"
    @keyup="setMask"
  />
</template>
