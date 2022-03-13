<script setup>

defineProps({
  label: { type: String, default: '' },
  expanded: Boolean
})
</script>

<template>
  <div class="box">
    <q-expansion-item :label="label" :default-opened="expanded" dense>
      <slot />
    </q-expansion-item>
  </div>
</template>
