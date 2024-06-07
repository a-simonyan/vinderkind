<template>
  <div class="w-[70px] h-[70px]">
    <img :src="cart.img" alt="order item" class="w-full h-full object-contain" />
  </div>
  <div class="flex flex-col gap-[3px]">
    <span class="text-base/[19px] text-vivid-purple font-semibold">{{ cart.name }}</span>
    <span class="text-xs/[17px] text-charcoal !font-sans font-semibold"
      >Quantity {{ cart.count }}</span
    >
    <span class="text-[15px]/[20px] font-bold font-sans">${{ cart.price }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  props: {
    cart: {
      type: Object,
      required: true
    }
  },
  setup() {}
})
</script>
