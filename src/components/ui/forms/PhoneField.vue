<script setup>
import opts from 'src/components/ui/options'

const props = defineProps({
  label: String
})

const mask = ref('(##)####-#####')

const setMask = (e) => {
  mask.value = e.target.value.length > 13 ? '(##)#####-####' : '(##)####-#####'
}
</script>

<template>
  <q-input v-bind="opts.forms.input" type="tel" :mask="mask" @keyup="setMask" label-slot>
    <template #label>
      <text-label :label="props.label" />
    </template>
  </q-input>
</template>
