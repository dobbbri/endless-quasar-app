<script setup>
const props = defineProps({
  label: String
})

const required = computed(() => props.label.includes('*'))
const cleanLabel = computed(() => props.label.replace('*', '').trim())
</script>

<template>
  <span v-if="label" style="font-size: 20px">{{ cleanLabel }}:</span>
  <span v-if="label && required" class="text-red text-h5">&ast;</span>
</template>
