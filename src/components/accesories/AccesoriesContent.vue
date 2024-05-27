<template>
  <div class="container pt-[31px] sm:pt-[61px] pb-[79px] sm:pb-[133px] px-[23px] xl:px-0">
    <div class="flex flex-col items-center gap-1">
      <h5 class="text-vivid-purple font-raleway text-[29px]/[20px] font-bold sm:font-semibold">
        געצייג
      </h5>
      <span class="text-light-purple text-[17px]/[20px] font-raleway font-semibold"
        >Accessories</span
      >
    </div>
    <div
      class="max-w-[814px] w-full grid grid-cols-2 sm:grid-cols-3 gap-[13px] sm:gap-[30px] m-auto mt-10 sm:mt-[35px] mb-[35px] sm:mb-[45px]"
    >
      <div v-for="(cart, index) in accessories" :key="index" class="w-full flex justify-center">
        <CustomCart :data="cart" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CustomCart from '../reusable/CustomCart.vue'
import { useAccessoriesStore } from '@/stores/accessories'

export default defineComponent({
  components: { CustomCart },
  setup() {
    const { accessories } = useAccessoriesStore()

    return {
      accessories
    }
  }
})
</script>
