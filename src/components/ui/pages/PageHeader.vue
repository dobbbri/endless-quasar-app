<script setup>
import opts from '@/components/ui/options'
</script>

<template>
  <header v-bind="opts.pages.header">
    <div class="q-toolbar row no-wrap items-center justify-between">
      <div>
        <slot name="buttons-left" />
      </div>
      <div class="page-header-title q-toolbar__title ellipsis text-h6">
        <slot name="title" />
      </div>
      <div>
        <slot name="buttons-right" />
      </div>
    </div>
  </header>
</template>
