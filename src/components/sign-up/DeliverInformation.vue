<template>
  <div class="border-b border-b-light-gray pb-5 sm:pb-[29.5px]">
    <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold mt-[17px] mb-[13px]">
      Delivery infomation
    </h5>
    <div class="flex flex-col gap-[17px]">
      <div
        v-for="(field, index) in deliveryInfo"
        :key="index"
        class="w-full flex flex-col justify-center relative"
      >
        <Field
          :name="field.field"
          :rules="!field.field.includes('address2') ? required : []"
          :placeholder="field.placeholder"
          class="border border-charcoal rounded-small px-[21px] pt-4 pb-[13px] text-xl placeholder:text-silver h-[53px] focus:border-vivid-purple"
        />
        <span class="text-red-500 text-xs pt-1 absolute bottom-[-18px]">{{
          errors && errors[field.field]
        }}</span>
      </div>
    </div>
    <div v-if="checkout" class="pt-[23px]">
      <SharedCheckBox label="It’s a Gift" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import SharedCheckBox from '@/components/reusable/SharedCheckBox.vue'
import { Field } from 'vee-validate'
export default defineComponent({
  components: { Field, SharedCheckBox },
  props: {
    deliveryInfo: {
      type: Object,
      required: true
    },
    errors: {
      type: Object
    },
    checkout: {
      type: Boolean
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
