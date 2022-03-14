<script setup>
import { useCurrencyInput } from "vue-currency-input"
import opts from '@/components/ui/options'

const props = defineProps({
  modelValue: Number,
  label: String
})

const { inputRef, formattedValue } = useCurrencyInput({
  locale: "pt-BR",
  currency: "BRL",
  currencyDisplay: "symbol",
  hideCurrencySymbolOnFocus: true,
  hideGroupingSeparatorOnFocus: false,
  hideNegligibleDecimalDigitsOnFocus: false,
  autoDecimalDigits: true,
  autoSign: true,
  useGrouping: true,
  accountingSign: false
})
</script>

<template>
  <q-input ref="inputRef" :modelValue="formattedValue" v-bind="opts.forms.input" label-slot>
    <template #label>
      <text-label :label="props.label" />
    </template>
  </q-input>
</template>
