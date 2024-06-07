<template>
  <div class="flex items-center gap-[10px]">
    <div
      class="w-[25px] h-[25px] flex justify-center items-center rounded-small border border-charcoal cursor-pointer"
      :class="checked ? 'bg-vivid-purple' : ''"
      @click="toggleChecked"
    >
      <IconCheck v-if="checked" class="fill-white [&_path]:fill-white w-4" />
    </div>
    <span class="sm:ml-2 text-gray-700">{{ label }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import IconCheck from '@/components/icons/IconCheck.vue'
export default defineComponent({
  components: { IconCheck },
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
