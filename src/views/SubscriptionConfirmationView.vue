<template>
  <div
    class="m-auto max-w-[478px] w-full pt-[31px] sm:pt-[67px] pb-[128px] flex flex-col items-center px-5 lg:px-0"
  >
    <h4 class="text-[26px] sm:ext-3xl/[35px] font-bold font-raleway mb-[17px] text-center">
      Thank you for your Order!
    </h4>
    <span class="text-[15px]/[18px] text-charcoal font-raleway text-center"
      >We’ve also emailed you a confirmation to heshy@capitalc.co</span
    >
    <SubscriptionDetail />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SubscriptionDetail from '@/components/subscription-detail/SubscriptionDetail.vue'
export default defineComponent({
  components: { SubscriptionDetail }
})
</script>
