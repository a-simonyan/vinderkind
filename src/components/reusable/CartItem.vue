<template>
  <div
    class="border border-vivid-purple rounded-small sm:max-w-[524px] w-full flex gap-[26px] px-4 py-6 sm:p-6"
  >
    <div class="max-w-[100px] w-full h-[139px]">
      <img
        :src="cart.img"
        alt="cart image"
        class="w-full h-full object-contain"
        draggable="false"
      />
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col gap-[2px]">
        <span class="text-lg/[23px] font-bold">{{ cart.name }}</span>
        <span class="text-[22px]/[24px] sm:text-lg/[23px] font-reforma">{{ cart.info }}</span>
        <span class="text-[19px] sm:text-[21px]/[28px] font-bold font-sans">${{ cart.price }}</span>
      </div>
      <div class="flex pt-[17px]">
        <div
          class="text-lg font-bold flex gap-6 rounded-small border border-charcoal justify-center py-2 min-w-[115px]"
        >
          <button @click="() => updateCount(cart.id, false)"><IconMinus /></button>
          <span class="font-sans">{{ cart.count }}</span>
          <button @click="() => updateCount(cart.id)"><IconPlus /></button>
        </div>
        <button
          @click="() => removeCart(cart.id)"
          class="text-vivid-purple text-[15px]/[18px] font-medium ml-[18px] hover:font-bold transition-all duration-200 ease-linear"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import IconMinus from '../icons/IconMinus.vue'
import IconPlus from '../icons/IconPlus.vue'
import { defineComponent } from 'vue'
import { useCartsStore } from '@/stores/carts'

export default defineComponent({
  components: { IconMinus, IconPlus },
  props: {
    cart: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { updateCount, removeCart } = useCartsStore()
    return {
      updateCount,
      removeCart
    }
  }
})
</script>
