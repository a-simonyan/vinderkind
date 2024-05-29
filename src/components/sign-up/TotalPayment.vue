<template>
  <div
    class="bg-lavender rounded-small py-[15px] px-[22px] text-black font-normal font-proxima ml-[51px] mr-[44px] mb-[325px] hidden lg:block"
  >
    <div class="mb-[22px] flex justify-between items-center">
      <span class="text-xl/6">Total Payment $219.98</span>
      <button class="text-[15px] text-vivid-purple font-raleway">Hide Details</button>
    </div>
    <div class="flex flex-col gap-4">
      <div v-for="(item, index) in orderInfo" :key="index">
        <div class="flex justify-between text-lg/[22px] items-center">
          <span>{{ item.title }}</span>
          <span>{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {},
  data() {
    return {
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
  }
})
</script>
