<template>
  <div
    v-if="data.count < 1"
    @click="addCart(data)"
    class="px-[15px] cursor-pointer flex items-center bg-vivid-purple h-[43px] sm:h-[54px] rounded-small justify-center py-[6px] sm:py-3 w-full text-white gap-[13px] sm:gap-5 mt-3 hover:opacity-85 transition-all duration-200 ease-linear"
  >
    <div class="flex gap-[21px] justify-center items-center">
      <IconBasket class="[&_path]:stroke-white w-[26px]" />
      <span class="text-base/[22px] sm:text-[21px] font-bold font-sans">${{ data.price }}</span>
    </div>
  </div>
  <div
    v-else
    class="flex items-center w-full justify-between px-2 sm:px-[15px] h-[43px] sm:h-[54px] cursor-pointer bg-vivid-purple rounded-small py-3 text-white gap-[13px] sm:gap-5 mt-3 hover:opacity-85 transition-all duration-200 ease-linear"
  >
    <button @click="addCart(data, false)" class="w-1/4 h-full flex justify-center items-center">
      <IconMinus class="[&_path]:fill-white w-4 h-4" />
    </button>
    <span class="w-3/4 text-[15px] line-clamp-1 sm:text-[21px]/[28px] text-wgite font-sans font-bold"
      >{{ data.count }} in Cart</span
    >
    <button @click="addCart(data)" class="w-1/4 h-full flex justify-center items-center">
      <IconPlus class="[&_path]:fill-white w-4 h-4" />
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import IconBasket from '@/components/icons/IconBasket.vue'
import IconMinus from '../icons/IconMinus.vue'
import IconPlus from '../icons/IconPlus.vue'
import { useCartsStore } from '@/stores/carts'
export default defineComponent({
  components: { IconBasket, IconMinus, IconPlus },
  setup() {
    const { updateCount, addCart } = useCartsStore()
    return {
      updateCount,
      addCart
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
})
</script>
