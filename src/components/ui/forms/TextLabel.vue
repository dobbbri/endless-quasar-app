<script setup>
const props = defineProps({
  label: String
})

const required = computed(() => props.label.includes('*'))
const cleanLabel = computed(() => props.label.replace('*', '').trim())
</script>

<template>
  <span v-if="cleanLabel">{{ cleanLabel }}</span>
  <span v-if="cleanLabel">:</span>
  <span
    v-if="cleanLabel && required"
    class="text-red text-h5"
    >&ast;</span
  >
</template>
