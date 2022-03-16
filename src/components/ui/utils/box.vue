<script setup>

defineProps({
  label: { type: String, default: '' },
})
</script>

<template>
  <div class="box shadow-4 text-primary">
    <div v-if="label" class="text-caption">{{ label }}</div>
    <slot />
  </div>
</template>
