<template>
  <div
    class="font-raleway flex gap-3 items-center pl-[17px] pr-[54px] mt-[28px] cursor-pointer py-2 w-max bg-lavender rounded-[18px] text-vivid-purple relative"
  >
    <IconCoupon />
    <span class="text-[13px] sm:text-base">I have a promo/referral code</span>
    <img
      src="../../assets/images/purple-arrow.png"
      alt="arrow"
      class="absolute w-[13px] h-2 right-5"
      draggable="false"
    />
  </div>
  <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold mt-[17px] mb-[13px]">
    Payment infomation
  </h5>
  <div class="flex flex-col gap-[17px]">
    <CustomInput placeholder="Name on card" />
  </div>
  <div
    class="mt-[17px] flex border border-charcoal justify-between rounded-small px-5 pt-4 pb-[13px] w-full text-xl/6 placeholder:text-silver focus:outline-vivid-purple"
  >
    <input
      type="text"
      id="expiryDate"
      v-model="expiryDate"
      @input="formatExpiryDate"
      placeholder="Expiration Date"
      class="placeholder:text-silver w-[30%] focus-visible:outline-none"
    />
    <input
      type="number"
      placeholder="CVV"
      class="placeholder:text-silver w-10 focus-visible:outline-none"
    />
    <input
      type="number"
      placeholder="Billing ZIP Code"
      class="placeholder:text-silver focus-visible:outline-none"
    />
  </div>
  <div class="flex justify-between bg-lavender rounded-small py-[14px] px-[22px] mt-[21px]">
    <span class="text-base sm:text-xl/6">Total Payment $219.98</span>
    <button class="text-[15px] text-vivid-purple font-raleway">View Details</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import CustomInput from '@/components/reusable/CustomInput.vue'
import IconCoupon from '@/components/icons/IconCoupon.vue'
export default defineComponent({
  components: { CustomInput, IconCoupon },
  data() {
    return {
      expiryDate: ''
    }
  },
  methods: {
    formatExpiryDate() {
      let formattedDate = this.expiryDate.replace(/\D/g, '')
      if (formattedDate.length > 2) {
        formattedDate = formattedDate.slice(0, 2) + '/' + formattedDate.slice(2)
      }
      this.expiryDate = formattedDate
    }
  }
})
</script>
