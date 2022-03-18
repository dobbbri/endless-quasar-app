<script setup>
import opts from '@/components/ui/options'

defineProps({
  label: { type: String, default: '' },
  expanded: { type: Boolean, default: false },
  noHeader: { type: Boolean, default: false },
})
</script>

<template>
  <q-expansion-item
    v-bind="opts.utils.box"
    :label="label"
    :header-class="{ 'text-weight-medium': !noHeader, hidden: noHeader }"
    :default-opened="expanded"
    class="border-top"
  >
    <div class="q-px-md q-pb-sm" :class="{ 'q-py-md': noHeader }">
      <slot />
    </div>
  </q-expansion-item>
</template>

<style lang="scss" scoped>
.q-item__label {
  padding-left: 10px;
}
</style>
