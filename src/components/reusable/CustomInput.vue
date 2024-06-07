<template>
  <label v-if="label" class="text-lg/[21px] mb-3 block">{{ label }}</label>
  <input
    :type="type"
    :value="modelValue"
    @input="(e: Event) => $emit('update:modelValue', (e.target as HTMLInputElement)?.value)"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    class="px-5 py-[11px] sm:pt-4 text-base sm:text-xl/6 sm:pb-[13px] w-full rounded-small border border-charcoal placeholder:text-silver focus-visible:outline-vivid-purple"
    :maxlength="maxlength"
    :class="[
      {
        'border-red-500': error
      },
      otherStyles
    ]"
  />
  <p v-if="error" class="text-red-500 text-xs mt-1">{{ error }}</p>
</template>

<script lang="ts">
export default {
  name: 'CustomInput',
  props: {
    label: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number
    },
    error: {
      type: [String, Boolean],
      default: ''
    },
    otherStyles: {
      type: String
    }
  }
}
</script>
