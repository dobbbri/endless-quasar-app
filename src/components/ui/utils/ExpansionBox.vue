<script setup>
import opts from '@/components/ui/options'

defineProps({
  label: { type: String, default: '' },
  expanded: { type: Boolean, default: false },
  noHeader: { type: Boolean, default: false },
})
</script>

<template>
  <div v-bind="opts.utils.box">
    <q-expansion-item
      :label="label"
      :header-class="{ 'text-primary': !noHeader, hidden: noHeader }"
      :default-opened="expanded"
    >
      <div class="q-px-md q-pb-sm" :class="{ 'q-py-md': noHeader }">
        <slot />
      </div>
    </q-expansion-item>
  </div>
</template>
