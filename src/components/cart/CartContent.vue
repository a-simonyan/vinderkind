<template>
  <div v-if="carts.length">
    <div class="flex flex-col gap-[21px] items-center w-full">
      <div v-for="(cart, index) in carts" :key="index" class="w-full flex justify-center">
        <CartItem :cart="cart" :allData="carts" />
      </div>
    </div>
    <div class="bg-lavender px-[22px] py-[18px] rounded-small flex justify-between my-4">
      <div class="flex flex-col gap-[10px]">
        <div>
          <span class="text-base/5">Shipping to 11219</span>
          <button class="text-vivid-purple text-[13px] pl-[9.5px]" @click="openModal">
            Change
          </button>
        </div>
        <span class="text-base/5">Sales Tax</span>
      </div>
      <div class="flex flex-col [&_span]:text-base gap-[10px]">
        <span>${{ shipping }}</span>
        <span>${{ tax }}</span>
      </div>
    </div>
    <router-link
      to="/checkout"
      class="flex justify-center bg-vivid-purple w-full py-4 text-[21px]/[25px] text-white rounded-small font-bold hover:opacity-90 transition-all ease-in duration-150"
    >
      Checkout ${{ (shipping + tax + calculateTotal()).toFixed(2) }}
    </router-link>
  </div>
  <div v-else>
    <p class="text-xl font-bold text-center">Your cart is empty.</p>
  </div>
  <SharedModal v-model="open">
    <UpdateZipModal @close="closeModal" />
  </SharedModal>
</template>

<script lang="ts">
import CartItem from '@/components/reusable/CartItem.vue'
import SharedModal from '@/components/reusable/SharedModal.vue'
import UpdateZipModal from '@/components/user-information/UpdateZipModal.vue'
import { defineComponent, ref } from 'vue'
import { useCartsStore } from '@/stores/carts'
import { useSalesTaxStore } from '@/stores/sales-tax'
export default defineComponent({
  components: { CartItem, SharedModal, UpdateZipModal },

  setup() {
    const { carts, calculateTotal } = useCartsStore()
    const { shipping, tax } = useSalesTaxStore()
    const open = ref(false)
    const openModal = () => {
      open.value = true
    }
    const closeModal = () => {
      open.value = false
    }

    return {
      carts,
      calculateTotal,
      shipping,
      tax,
      open,
      openModal,
      closeModal
    }
  }
})
</script>
