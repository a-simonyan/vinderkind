<template>
  <div class="border-b border-b-light-gray pb-5 sm:pb-[29.5px]">
    <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold mt-[17px] mb-[13px]">
      Delivery infomation
    </h5>
    <div class="flex flex-col gap-[17px]">
      <div v-for="(field, index) in delivery" :key="index" class="w-full flex justify-center">
        <CustomInput
          :data="field"
          :placeholder="field.placeholder"
          value="field.value"
          v-model="field.value"
        />
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
import { defineComponent, ref } from 'vue'
import CustomInput from '@/components/reusable/CustomInput.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
export default defineComponent({
  components: { CustomInput, IconPlus },
  props: {
    deliveryInfo: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const delivery = ref([
      {
        placeholder: 'Address',
        value: props.deliveryInfo.address
      },
      {
        placeholder: 'Address Line 2',
        value: props.deliveryInfo.address2
      },
      {
        placeholder: 'City, State, ZIP',
        value: props.deliveryInfo.city
      }
    ])
    return {
      delivery
    }
  }
})
</script>
