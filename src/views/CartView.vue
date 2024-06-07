<script setup lang="ts">
import CartContent from '@/components/cart/CartContent.vue'
</script>
<template>
  <div class="container">
    <div
      class="sm:max-w-[524px] w-full m-auto pt-[34px] pb-[94px] sm:pt-20 sm:pb-[183px] px-[23px] sm:px-0"
    >
      <h5 class="text-[19px] sm:text-3xl font-bold pb-[17px] sm:pb-6 font-raleway">Your Cart</h5>
      <CartContent />
    </div>
  </div>
</template>
