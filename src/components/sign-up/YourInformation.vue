<template>
  <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold mt-[17px] mb-[13px]">
    Your information
  </h5>
  <div class="flex flex-col gap-[17px]">
    <div
      v-for="(field, index) in yourInfo"
      :key="index"
      class="w-full flex flex-col justify-center relative"
    >
      <CustomField
        :name="field.field"
        :rules="[required, field.valid]"
        :placeholder="field.placeholder"
      />
      <span class="text-red-500 text-xs pt-1">{{ errors[field.field] }}</span>
    </div>
    <CustomField name="phone" :rules="[required]" placeholder="Phone" />
    <span class="text-red-500 text-xs pt-1">{{ errors.phone }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CustomField from '@/components/reusable/CustomField.vue'
import { required } from '@/utills/helpers/validation'
export default defineComponent({
  components: { CustomField },
  props: {
    yourInfo: {
      type: Object,
      required: true
    },
    errors: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      required
    }
  }
})
</script>
