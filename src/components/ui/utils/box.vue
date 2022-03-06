<script setup>

defineProps({
  label: { type: String, default: '' },
  expanded: Boolean
})
</script>

<template>
  <div class="box">
    <div v-if="label" class="text-caption">{{ label }}</div>
    <slot />
  </div>
</template>
