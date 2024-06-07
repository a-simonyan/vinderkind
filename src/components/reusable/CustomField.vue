<template>
  <div class="relative" :class="'field' + name">
    <Field
      :name="name"
      :rules="rules"
      class="w-full border rounded-small shadow-gray pt-4 pb-[13px] px-[18px] text-base sm:text-xl border-charcoal placeholder:text-silver h-[49px] sm:h-[53px]"
      :placeholder="placeholder"
      @focus="focusField"
      @bind="focusField"
    />
    <span
      :class="isFocused ? 'opacity-100 z-[1]' : ' opacity-0 z-0'"
      class="absolute bg-white -top-2 left-4 px-1 transition-all duration-75 ease-linear text-sm"
      >{{ placeholder }}</span
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Field } from 'vee-validate'
import { required } from '@/utills/helpers/validation'
export default defineComponent({
  components: { Field },
  props: {
    name: {
      type: String,
      required: true
    },
    rules: {
      type: Object,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  setup() {
    const isFocused = ref(false)

    function focusField() {
      isFocused.value = true
    }
    return {
      isFocused,
      focusField,
      required
    }
  }
})
</script>
