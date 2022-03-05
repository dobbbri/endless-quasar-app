<script setup>
import { ionChevronDownOutline, ionChevronUpOutline } from '@quasar/extras/ionicons-v6'

// import opts from 'src/components/ui/options'

defineProps({
  label: { type: String, default: '' },
  expanded: Boolean
})
</script>

<template>
  <div class="box">
    <q-expansion-item
      v-model="expanded"
      :label="label"
      icon="none"
      :expand-icon="ionChevronDownOutline"
      :expanded-icon="ionChevronUpOutline"
      dense-toggle
    >
      <slot />
    </q-expansion-item>
  </div>
</template>
