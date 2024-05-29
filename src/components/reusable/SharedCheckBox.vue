<template>
  <div class="flex items-center gap-[10px]">
    <div
      class="w-[25px] h-[25px] rounded-small border border-charcoal cursor-pointer"
      :class="checked ? 'bg-vivid-purple' : ''"
      @click="toggleChecked"
    ></div>
    <span class="sm:ml-2 text-gray-700">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const checked = ref(props.modelValue)

    const toggleChecked = () => {
      checked.value = !checked.value
      emit('update:modelValue', checked.value)
    }

    return {
      checked,
      toggleChecked
    }
  }
})
</script>
