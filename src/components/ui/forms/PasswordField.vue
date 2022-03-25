<script setup>
import opts from '@/components/ui/options'

const isPwd = ref(true)
</script>

<template>
  <q-input
    v-bind="opts.forms.input"
    :type="isPwd ? 'password' : 'text'"
    label-slot
  >
    <template #append>
      <q-icon
        v-if="isPwd"
        name="visibility_off"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
      <q-icon
        v-else
        name="visibility"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>
</template>
