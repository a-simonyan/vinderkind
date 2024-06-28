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
  <div v-if="isDivVisible" class="flex flex-col mt-[17px] relative">
    <CustomField name="promocode" :rules="[required]" placeholder="Promo Code" />
    <button @click.prevent="" class="absolute top-[14px] right-4 text-lg text-vivid-purple">
      Apply
    </button>
    <span class="text-sm pt-1 text-red-500">{{ errors.promocode }}</span>
  </div>
  <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold mt-[17px] mb-[13px]">
    Payment infomation
  </h5>
  <div class="flex flex-col relative">
    <div class="mb-4">
      <CustomField name="cartName" :rules="[required]" placeholder="Name on card" />
      <span class="text-red-500 text-xs pt-1">{{ errors.cartName }}</span>
    </div>
    <CustomField name="cardNumber" :rules="[required, cardValidation]" placeholder="Card number" />
    <span class="text-red-500 text-xs pt-1">{{ errors.cardNumber }}</span>
  </div>
  <div
    class="mt-[17px] h-[49px] sm:h-[53px] flex gap-1 sm:grid grid-cols-3 border border-charcoal justify-between rounded-small px-5 pt-4 pb-[13px] w-full text-xl/6 placeholder:text-silver focus:outline-vivid-purple"
  >
    <div
      v-for="(field, index) in paymentInfo"
      :key="index"
      class="w-max sm:w-full flex flex-col justify-center relative"
    >
      <div>
        <Field
          :name="field.field"
          :rules="[required]"
          :placeholder="field.placeholder"
          class="text-base sm:text-xl placeholder:text-silver focus:outline-none h-full w-full"
          @blur="focusField"
          @focus="focusField"
        />
        <span
          :class="isFocused ? 'opacity-100 z-[1]' : ' opacity-0 z-0'"
          class="absolute bg-white -top-[23px] left-0 px-1 transition-all duration-75 ease-linear text-sm whitespace-nowrap"
          >{{ field.placeholder }}</span
        >
      </div>
      <span class="text-red-500 text-xs pt-1 absolute -bottom-8 whitespace-nowrap">{{
        errors[field.field] ? 'Field is required' : ''
      }}</span>
    </div>
  </div>
  <div class="flex flex-col justify-between bg-lavender rounded-small py-[14px] px-[22px] mt-6">
    <div class="flex justify-between">
      <span class="text-base sm:text-xl/6"
        >Total Payment ${{ calculateTotalAmount(totalPayment) }}</span
      >
      <button @click.prevent="toggleViewMore" class="text-[15px] text-vivid-purple font-raleway">
        {{ !viewMore ? 'View Details' : 'Hide Details' }}
      </button>
    </div>
    <div v-if="viewMore" class="mt-4">
      <div class="flex flex-col gap-3">
        <div class="flex justify-between text-base items-center">
          <span>Vinderkind Subscription</span>
          <span>${{ calculateZip() }}</span>
        </div>
        <div v-if="totalPayment.products.length">
          <div v-for="(item, index) in totalPayment.products" :key="index">
            <div class="flex justify-between text-base items-center">
              <span>{{ item.name }}</span>
              <span>${{ item.price }}</span>
            </div>
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
import CustomField from '@/components/reusable/CustomField.vue'
import { required } from '@/utills/helpers/validation'
import { useTotalPaymentStore } from '@/stores/totalPayment'
export default defineComponent({
  components: { IconCoupon, Field, CustomField },
  data() {
    return {
      expiryDate: ''
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
    const cardValidation = (value: string) => {
      const regex = /^\d{16}$/
      return regex.test(value) ? true : 'Invalid card'
    }

    const isDivVisible = ref(false)
    const viewMore = ref(false)
    function toggleDivVisibility() {
      isDivVisible.value = !isDivVisible.value
    }
    const { calculateTotalAmount, totalPayment, calculateProduct, calculateZip } =
      useTotalPaymentStore()
    function toggleViewMore() {
      viewMore.value = !viewMore.value
    }
    const isFocused = ref(false)

    function focusField() {
      isFocused.value = true
    }

    return {
      isDivVisible,
      toggleDivVisibility,
      required,
      viewMore,
      toggleViewMore,
      focusField,
      isFocused,
      calculateTotalAmount,
      totalPayment,
      calculateProduct,
      calculateZip,
      cardValidation
    }
  }
})
</script>
