<template>
  <div class="border-b border-light-gray pb-[27px]">
    <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold mt-[17px] mb-[13px]">
      Accessories
    </h5>
    <div class="rounded-small border border-charcoal py-4 px-4 sm:px-6 flex gap-5">
      <div class="h-max"><SharedCheckBox v-model="checked" /></div>
      <div class="w-[132px] h-[132px]">
        <img
          src="../../../public/images/accessories/accessories-1.png"
          alt="accessories"
          class="w-full h-full object-contain"
        />
      </div>
      <div class="flex flex-col gap-[7px] mt-2">
        <span class="text-vivid-purple text-[19px]/[22px] font-raleway font-semibold">
          Vinderkind Speaker
        </span>
        <span class="text-[21px] font-bold font-sans">$29.99</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import SharedCheckBox from '@/components/reusable/SharedCheckBox.vue'
export default defineComponent({
  components: { SharedCheckBox },
  setup() {
    let checked = ref(false)
    return {
      checked
    }
  }
})
</script>
