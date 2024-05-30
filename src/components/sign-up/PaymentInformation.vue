<template>
  <button
    @click.prevent="toggleDivVisibility"
    class="font-raleway flex gap-3 items-center pl-[17px] pr-[54px] mt-[28px] cursor-pointer py-2 w-max bg-lavender rounded-[18px] text-vivid-purple relative"
  >
    <IconCoupon />
    <span class="text-[13px] sm:text-base">I have a promo/referral code</span>
    <img
      src="../../assets/images/purple-arrow.png"
      alt="arrow"
      class="absolute w-[13px] h-2 right-5"
      draggable="false"
      :class="!isDivVisible ? 'rotete-180' : '-rotate-180'"
    />
  </button>
  <div class="flex flex-col mt-[17px]">
    <Field
      v-if="isDivVisible"
      name="promocode"
      :rules="[required]"
      placeholder="Promo Code"
      class="border border-charcoal rounded-small px-[21px] pt-4 pb-[13px] text-xl placeholder:text-silver h-[53px] focus:border-vivid-purple"
    />

    <span class="text-sm pt-1 text-red-500">{{ errors?.promocode }}</span>
  </div>
  <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold mt-[17px] mb-[13px]">
    Payment infomation
  </h5>
  <div class="flex flex-col relative">
    <Field
      name="cart"
      :rules="[required]"
      placeholder="Name on card"
      class="border border-charcoal rounded-small px-[21px] pt-4 pb-[13px] text-xl placeholder:text-silver h-[53px] focus:border-vivid-purple"
    />
    <span class="text-red-500 text-xs pt-1 absolute bottom-[-18px]">{{ errors.cart }}</span>
  </div>
  <div
    class="mt-[17px] h-[53px] grid grid-cols-3 border border-charcoal justify-between rounded-small px-5 pt-4 pb-[13px] w-full text-xl/6 placeholder:text-silver focus:outline-vivid-purple"
  >
    <div
      v-for="(field, index) in paymentInfo"
      :key="index"
      class="w-full flex flex-col justify-center relative"
    >
      <Field
        :name="field.field"
        :rules="[required]"
        :placeholder="field.placeholder"
        class="text-xl placeholder:text-silver focus:outline-none h-full"
      />
      <span class="text-red-500 text-xs pt-1 absolute bottom-[-30px]">{{
        errors[field.field]
      }}</span>
    </div>
  </div>
  <div class="flex flex-col justify-between bg-lavender rounded-small py-[14px] px-[22px] mt-6">
    <div class="flex justify-between">
      <span class="text-base sm:text-xl/6">Total Payment $219.98</span>
      <button @click.prevent="toggleViewMore" class="text-[15px] text-vivid-purple font-raleway">
        {{ !viewMore ? 'View Details' : 'Hide Details' }}
      </button>
    </div>
    <div v-if="viewMore" class="mt-4">
      <div class="flex flex-col gap-3">
        <div v-for="(item, index) in orderInfo" :key="index">
          <div class="flex justify-between text-base items-center">
            <span>{{ item.title }}</span>
            <span>{{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import IconCoupon from '@/components/icons/IconCoupon.vue'
import { Field } from 'vee-validate'
export default defineComponent({
  components: { IconCoupon, Field },
  data() {
    return {
      expiryDate: '',
      orderInfo: [
        {
          title: 'Yearly Vinderkind Subscription',
          price: '$219.98'
        },
        {
          title: 'חודש כסלו תשפ״ד טעקע 4',
          price: '$19.98'
        },
        {
          title: 'Vinderkind Speaker',
          price: '$29.98'
        }
      ]
    }
  },
  props: {
    errors: {
      type: Object,
      required: true
    },
    paymentInfo: {
      type: Object,
      required: true
    }
  },
  setup() {
    const isDivVisible = ref(false)
    const viewMore = ref(false)
    function toggleDivVisibility() {
      isDivVisible.value = !isDivVisible.value
    }
    function required(value: unknown): boolean | string {
      return !!value || 'This field is required'
    }
    function toggleViewMore() {
      viewMore.value = !viewMore.value
    }
    return {
      isDivVisible,
      toggleDivVisibility,
      required,
      viewMore,
      toggleViewMore
    }
  }
})
</script>
