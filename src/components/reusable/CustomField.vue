<template>
  <div class="relative" :class="'field' + name">
    <Field
      v-model="internalValue"
      :name="name"
      :rules="rules"
      class="w-full border rounded-small shadow-gray pt-4 pb-[13px] px-[18px] text-base sm:text-xl border-charcoal placeholder:text-silver h-[49px] sm:h-[53px]"
      :placeholder="placeholder"
      @focus="focusField"
      @blur="focusField"
    />
    <span
      :class="isFocused ? 'opacity-100 z-[1]' : ' opacity-0 z-0'"
      class="absolute bg-white -top-2 left-4 px-1 transition-all duration-75 ease-linear text-sm"
      >{{ placeholder }}</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import { Field, useField } from 'vee-validate'

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
    },
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const { errorMessage } = useField(props.name, props.rules)

    const internalValue = computed({
      get: () => props.modelValue,
      set: (val) => emit('update:modelValue', val)
    })

    const isFocused = ref(false)

    function focusField() {
      isFocused.value = !isFocused.value
    }

    watch(
      () => props.modelValue,
      (newValue) => {
        internalValue.value = newValue
      }
    )

    return {
      internalValue,
      isFocused,
      focusField,
      errorMessage
    }
  }
})
</script>
