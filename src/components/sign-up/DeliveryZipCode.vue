<template>
  <div class="mt-[22px] sm:mt-[38px] relative">
    <span class="text-lg font-raleway pb-[13px] block">Enter the delivery ZIP Code</span>
    <div class="relative">
      <div class="relative field">
        <Field
          :name="'zip' + '-' + index"
          :rules="[required]"
          class="w-full border rounded-small shadow-gray pt-4 pb-[13px] px-[18px] h-[49px] sm:h-[53px] text-[19px] sm:text-xl border-black placeholder:text-silver"
          placeholder="Delivery ZIP Code"
          :model-value="zipCode"
          @input="
            (e: Event) => {
              const val = (e.target as HTMLInputElement)?.value
              $emit('update:modelValue', val)

              if (val.length >= 5) {
                if (val.length > 5) {
                  zipErr = 'ZIP code cannot be more than 5 digits.'
                } else {
                  zipErr = ''
                }
              } else {
                zipErr = ''
              }
            }
          "
          @focus="focusField"
          @bind="focusField"
        />
        <span
          :class="isFocused ? 'opacity-100 z-[1]' : ' opacity-0 z-0'"
          class="absolute bg-white -top-2 left-4 px-1 transition-all duration-75 ease-linear text-sm"
          >Delivery ZIP Code</span
        >
      </div>
      <span class="text-red-500 text-xs pt-1 block">{{ errors['zip' + '-' + index] }}</span>
      <span v-if="zipErr.length" class="text-red-500 text-xs pt-1 block">{{ zipErr }}</span>
      <IconCheck v-if="checkZip" class="absolute top-4 sm:top-5 right-[22px] w-4 sm:w-max" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import { Field } from 'vee-validate'
import { required } from '@/utills/helpers/validation'
export default defineComponent({
  components: { IconCheck, Field },
  props: {
    zipCode: {
      type: String,
      required: true
    },
    errors: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    checkZip: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      zipErr: ''
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
