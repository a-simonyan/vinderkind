<template>
  <div class="bg-lavender">
    <div class="container flex flex-col justify-center items-center pt-[18px] pb-[46px]">
      <div class="flex flex-col items-center justify-center">
        <span class="text-3xl/[39px] font-bold font-hebrew text-vivid-purple">געצייג</span>
        <span class="text-[17px]/[20px] text-light-purple font-semibold">Accessories</span>
      </div>
      <div
        v-if="lastAccessories.length"
        class="pt-7 max-w-[814px] w-full pl-0 px-5 sm:px-5 lg:px-0"
      >
        <SharedSwiper :data="lastAccessories" :points="points">
          <template #default="{ index, content }">
            <CustomCart :data="content" :key="index" :allData="lastAccessories" />
          </template>
        </SharedSwiper>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useAccessoriesStore } from '@/stores/accessories'
import CustomCart from '@/components/reusable/CustomCart.vue'
import SharedSwiper from '@/components/reusable/SharedSwiper.vue'
export default defineComponent({
  components: { CustomCart, SharedSwiper },
  setup() {
    const { lastAccessories } = useAccessoriesStore()

    return {
      lastAccessories
    }
  },
  data: function () {
    return {
      points: {
        300: { slidesPerView: 1.5 },
        480: { slidesPerView: 2.5 },
        740: { slidesPerView: 3 }
      }
    }
  }
})
</script>
