<script setup>
import opts from '@/components/ui/options'

defineProps({
  label: { type: String, default: '' },
  icon: { type: String, default: '' },
  expanded: { type: Boolean, default: false },
  noHeader: { type: Boolean, default: false },
})
</script>

<template>
  <q-expansion-item
    v-bind="opts.utils.box"
    :icon="icon"
    :label="label"
    :header-class="{ 'text-weight-medium': !noHeader, hidden: noHeader }"
    :default-opened="expanded"
    class="border-top"
  >
    <q-card>
      <q-card-section :class="{ 'q-py-md': noHeader }">
        <slot />
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

