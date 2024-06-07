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
        <CustomField
          :name="field.field"
          :rules="!field.field.includes('address2') ? required : []"
          :placeholder="field.placeholder"
        />

        <span class="text-red-500 text-xs pt-1">{{ errors && errors[field.field] }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import CustomField from '@/components/reusable/CustomField.vue'
import { required } from '@/utills/helpers/validation'
export default defineComponent({
  components: { CustomField },
  props: {
    deliveryInfo: {
      type: Object,
      required: true
    },
    errors: {
      type: Object
    }
  },
  setup() {
    return {
      required
    }
  }
})
</script>
