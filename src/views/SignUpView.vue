<template>
  <div class="container lg:px-[67px] lg:pt-[57px] pb-[63px] sm:pb-[71px]">
    <div class="flex lg:shadow-gray rounded-small flex-col-reverse lg:flex-row">
      <SignUpSubscription />
      <SignUpPayment />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SignUpSubscription from '@/components/sign-up/SignUpSubscription.vue'
import SignUpPayment from '@/components/sign-up/SignUpPayment.vue'
export default defineComponent({
  components: { SignUpSubscription, SignUpPayment }
})
</script>
