<script setup>
import opts from 'src/components/ui/options'

const props = defineProps({
  label: String
})

const isPwd = ref(true)
</script>

<template>
  <q-input v-bind="opts.forms.input" :type="isPwd ? 'password' : 'text'" label-slot>
    <template #label>
      <text-label :label="props.label" />
    </template>
    <template #append>
      <q-icon v-if="isPwd" name="visibility_off" class="cursor-pointer" @click="isPwd = !isPwd" />
      <q-icon v-else name="visibility" class="cursor-pointer" @click="isPwd = !isPwd" />
    </template>
  </q-input>
</template>
