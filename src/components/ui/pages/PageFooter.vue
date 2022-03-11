<script setup>
import opts from '@/components/ui/options'
</script>

<template>
  <footer v-bind="opts.pages.footer">
    <slot>
      <home-tabs />
    </slot>
  </footer>
</template>
