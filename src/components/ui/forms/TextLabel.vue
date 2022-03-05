<script setup>
const props = defineProps({
  label: String
})

const required = computed(() => props.label.includes('*'))
const cleanLabel = computed(() => props.label.replace('*', '').trim())
</script>

<template>
  <span style="font-size: 20px">{{ cleanLabel }}:</span>
  <span v-show="required" class="text-red text-h5">&ast;</span>
</template>
