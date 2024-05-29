<template>
  <div class="border-b border-b-light-gray pb-5 sm:pb-[29.5px]">
    <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold mt-[17px] mb-[13px]">
      Delivery infomation
    </h5>
    <div class="flex flex-col gap-[17px]">
      <div
        v-for="(field, index) in deliveryInfo"
        :key="index"
        class="w-full flex flex-col justify-center"
      >
        <Field
          :name="field.field"
          :rules="required"
          :placeholder="field.placeholder"
          class="border border-charcoal rounded-small px-[21px] pt-4 pb-[13px] text-xl placeholder:text-silver h-[53px] focus:border-vivid-purple"
        />
        <span class="text-red-500 text-base pt-1">{{ errors && errors[field.field] }}</span>
      </div>
    </div>
    <button
      class="text-vivid-purple text-base sm:text-lg font-bold font-raleway flex items-center gap-[9.5px] mt-[17px]"
    >
      <IconPlus class="[&_path]:fill-vivid-purple" />Add Another Subscription
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import { Field } from 'vee-validate'
export default defineComponent({
  components: { Field, IconPlus },
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
    function required(value: any) {
      return value ? true : 'This field is required'
    }
    return {
      required
    }
  }
})
</script>
