<template>
  <div
    class="border font-proxima border-vivid-purple rounded-small flex flex-col w-full mt-[30px] pb-[41px] items-center pt-[33px] px-5 sm:px-[35px]"
  >
    <span class="text-[21px]/[25px] text-vivid-purple font-bold mb-[18px]">Order Details</span>
    <span class="text-lg/[21px] text-charcoal">Subscription #467888</span>
    <h5 class="text-2xl sm:text-[33px]/[40px] font-semibold my-5">Yearly Subscription</h5>
    <span class="text-xl text-center sm:text-[21px]/[25px] font-semibold">
      Starting from the week of Nov 15, 2024</span
    >
    <span class="text-[13px]/[15px] font-raleway mt-[13px] mb-[17px]"
      >Automatically renews on Nov 15, 2025</span
    >
    <span class="text-[17px]/[20px] font-bold font-proxima">$199.99</span>
    <div
      class="bg-vivid-purple rounded-[17px] font-proxima py-2 px-4 text-white font-bold text-[13px] min-w-[119px] mt-4 mb-[26px]"
    >
      You Saved 17%
    </div>
    <div>
      <span class="text-[15px]/[18px] font-semibold">Your FREE Gift</span>
      <div class="w-[103px] h-[103px] mt-3">
        <img src="../../assets/images/gift.png" alt="gift" class="w-full h-full object-contain" />
      </div>
    </div>
    <h5
      class="text-[27px]/[33px] font-semibold mt-[26px] border-t border-t-light-gray w-full text-center pt-[31px]"
    >
      Other Items
    </h5>
    <div class="flex flex-col gap-4 w-full mt-[13px] mb-10">
      <div
        v-for="(cart, index) in carts"
        :key="index"
        class="w-full flex border border-charcoal rounded-small py-2 px-[14px]"
      >
        <ConfirmationItems :cart="cart" />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-[5px] mb-[26px]">
      <span class="text-[17px]/[20px] font-bold">Total Paid $249.97</span>
      <span class="text-[15px]/[18px] font-light">with Visa ending in 4567</span>
    </div>
    <div class="flex flex-col items-center">
      <span class="text-[19px] font-semibold"> Gift from: </span>
      <span class="text-[19px] font-light">David Green</span>
      <span class="text-center mt-5 mb-[27px]"
        >I’m so happy for your wedding. Here is some reading material to keep you entertained</span
      >
    </div>
    <div class="flex flex-col items-center">
      <span class="font-semibold text-[19px]/[26px]">Delivery Information:</span>
      <span class="text-center text-[19px]/[26px]">
        Heshy Cisner <br />
        5304 13th Ave,<br />
        Brooklyn NY, 11219</span
      >
    </div>
    <button class="text-[15px] text-vivid-purple font-medium mt-[35px]">Manage Subscription</button>
  </div>
</template>

<script lang="ts">
import { useCartsStore } from '@/stores/carts'
import { defineComponent } from 'vue'
import ConfirmationItems from '@/components/reusable/ConfirmationItems.vue'
export default defineComponent({
  components: { ConfirmationItems },
  setup() {
    const { carts } = useCartsStore()
    return {
      carts
    }
  }
})
</script>
