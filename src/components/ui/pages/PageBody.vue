<script setup>
import opts from 'src/components/ui/options'
</script>

<template>
  <q-scroll-area v-bind="opts.pages.body">
    <div class="page-body-spacer-header"></div>

    <slot />

    <div class="page-body-spacer-footer"></div>
  </q-scroll-area>
</template>
