<template>
  <input
    :type="type"
    :value="modelValue"
    @input="(e: any) => $emit('update:modelValue', e?.target?.value)"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :maxlength="maxlength"
    :class="{
      'border-red-500': error,
      'border-gray-300': !error,
      'px-5 pt-4 pb-[13px] w-full rounded-small border border-charcoal text-xl/6 placeholder:text-silver focus-visible:outline-vivid-purple': true
    }"
  />
  <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
</template>

<script lang="ts">
export default {
  name: 'CustomInput',
  props: {
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
    }
  }
}
</script>
