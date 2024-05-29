<template>
  <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold mt-[17px] mb-[13px]">
    Your information
  </h5>
  <div class="flex flex-col gap-[17px]">
    <div v-for="(field, index) in fileds" :key="index" class="w-full flex justify-center">
      <CustomInput
        :data="field"
        :placeholder="field.placeholder"
        value="field.value"
        v-model="field.value"
      />
    </div>
    <PhoneInput :phone="yourInfo.phone" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import CustomInput from '@/components/reusable/CustomInput.vue'
import PhoneInput from '@/components/reusable/PhoneInput.vue'
export default defineComponent({
  components: { CustomInput, PhoneInput },
  props: {
    yourInfo: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const fileds = ref([
      {
        placeholder: 'Full name',
        value: props.yourInfo.name,
        error: 'Full name is required '
      },
      {
        placeholder: 'Email',
        value: props.yourInfo.email,
        error: 'Email is required'
      }
    ])
    return {
      fileds
    }
  }
})
</script>
