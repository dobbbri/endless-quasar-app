<script setup>
import opts from '@/components/ui/options'
</script>

<template>
  <q-input
    type="text"
    v-bind="opts.forms.search"
    placeholder="Digite para pesquisar"
  >
    <template v-slot:prepend>
      <q-icon
        name="search"
        color="blue-grey-4"
        size="sm"
        dense
      />
    </template>
  </q-input>
</template>
