<template>
  <div class="mt-[22px] sm:mt-[38px] relative">
    <span class="text-lg font-raleway pb-[13px] block">Enter the delivery ZIP Code</span>
    <div class="relative">
      <Field
        :name="'zip' + '-' + index"
        :rules="[required]"
        class="w-full border rounded-small shadow-gray pt-4 pb-[13px] px-[18px] text-xl border-black placeholder:text-silver"
        placeholder="Delivery ZIP Code"
        :model-value="zipCode"
        @input="
          (e: Event) => {
            $emit('update:modelValue', (e.target as HTMLInputElement)?.value)
          }
        "
      />
      <span class="text-red-500 text-xs pt-1 block absolute">{{ errors.zip }}</span>
      <IconCheck v-if="checkZip" class="absolute top-5 right-[22px]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import { Field } from 'vee-validate'

export default defineComponent({
  components: { Field, IconCheck },
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
  setup() {
    function required(value: unknown): boolean | string {
      return value ? true : 'This field is required'
    }

    return {
      required
    }
  }
})
</script>
