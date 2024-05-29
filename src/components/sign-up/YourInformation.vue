<template>
  <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold mt-[17px] mb-[13px]">
    Your information
  </h5>
  <div class="flex flex-col gap-[17px]">
    <div
      v-for="(field, index) in yourInfo"
      :key="index"
      class="w-full flex flex-col justify-center"
    >
      <Field
        :name="field.field"
        :rules="[required, field.valid]"
        :placeholder="field.placeholder"
        class="border border-charcoal rounded-small px-[21px] pt-4 pb-[13px] text-xl placeholder:text-silver h-[53px] focus:border-vivid-purple"
      />
      <span class="text-red-500 text-base pt-1">{{ errors[field.field] }}</span>
    </div>
    <PhoneInput :phone="yourInfo.phone" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PhoneInput from '@/components/reusable/PhoneInput.vue'
import { Field } from 'vee-validate'
export default defineComponent({
  components: { PhoneInput, Field },
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
    function required(
      value: string | number | boolean | null | undefined | Array<any> | Record<string, any>
    ) {
      return value ? true : 'This field is required'
    }

    return {
      required
    }
  }
})
</script>
