<template>
  <div
    class="border font-raleway border-vivid-purple rounded-small flex flex-col w-full mt-[30px] pb-[41px] items-center pt-[33px] px-5 sm:px-[35px]"
  >
    <span class="text-[21px]/[25px] text-vivid-purple font-bold mb-[18px]">Order Details</span>
    <span class="text-lg/[21px] text-charcoal">Subscription #467888</span>
    <h5 class="text-[27px]/[33px] font-medium mt-[26px]">Items</h5>
    <div class="flex flex-col gap-4 w-full mt-[13px] mb-10">
      <div
        v-for="(cart, index) in carts"
        :key="index"
        class="w-full flex border border-charcoal rounded-small py-2 px-[14px]"
      >
        <ConfirmationItems :cart="cart" />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-[5px] mb-[34px]">
      <span class="text-[22px]/[26px] font-bold">Total Paid $249.97</span>
      <span class="text-[15px]/[18px] font-light">with Visa ending in 4567</span>
    </div>
    <div class="flex flex-col items-center">
      <span class="font-semibold text-[19px]/[26px]">Delivery Information:</span>
      <span class="text-center text-[19px]/[26px]">
        Heshy Cisner <br />
        5304 13th Ave,<br />
        Brooklyn NY, 11219</span
      >
    </div>
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
