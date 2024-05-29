<template>
  <div
    class="flex flex-col items-center rounded-small border border-vivid-purple px-2 sm:px-[13px] pt-[7px] pb-[15px] max-w-[209px] sm:max-w-[258px] w-full"
    :class="customClass"
  >
    <div>
      <img :src="data.img" alt="cart" draggable="false" />
    </div>
    <span
      class="text-[15px]/[16px] sm:text-lg/[23px] font-medium sm:font-bold text-vivid-purple font-hebrew mt-[10px] block"
      >{{ data.name }}</span
    >
    <span class="text-lg/[19px] sm:text-xl/[27px] text-vivid-purple font-hebrew">{{
      data.info
    }}</span>
    <ButtonBasket :data="data" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ButtonBasket from './ButtonBasket.vue'
export default defineComponent({
  components: { ButtonBasket },
  props: {
    data: {
      type: Object,
      required: true
    },
    customClass: {}
  }
})
</script>
