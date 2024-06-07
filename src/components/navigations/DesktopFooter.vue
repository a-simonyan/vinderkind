<template>
  <div class="bg-vivid-purple">
    <div class="container flex justify-center pb-[27px] relative">
      <div class="absolute -top-6 max-w-[219px] sm:max-w-[361px] z-[9]">
        <img src="../../assets/footer_logo.png" draggable="false" alt="footer logo" class="" />
      </div>
      <div class="flex flex-col items-center w-full px-8 pt-16 sm:pt-[92px]">
        <h5 class="text-[25px]/[30px] text-white font-semibold pb-[10px] font-raleway">
          Subscription Office
        </h5>
        <span class="text-lg/[25px] text-grey">info@vinderkind.com</span>
        <span class="text-lg/[25px] text-grey">718-517-8310</span>
        <button
          @click="openModal"
          class="bg-white max-w-[380px] w-full pt-[18px] pb-[14px] rounded-small mt-[25px] text-vivid-purple text-[21px]/[25px] font-bold flex justify-center hover:opacity-90 transition-all ease-linear duration-150"
        >
          Sign up for <span class="hidden px-2 sm:flex">Vinderkind </span> Updates
        </button>
        <hr class="w-[85%] block h-[1px] border-t border-t-blue-grey mt-[25.5px] mb-4 px-16" />
        <span class="text-sm/4 text-white"
          >Copyright © {{ new Date().getFullYear() }} Vinderkind, All rights reserved</span
        >
      </div>
    </div>
  </div>
  <SharedModal v-model="open">
    <YorInformationModal @close="closeModal" />
  </SharedModal>
</template>

<script lang="ts">
import { ref } from 'vue'
import SharedModal from '@/components/reusable/SharedModal.vue'
import YorInformationModal from '@/components/sign-up/YorInformationModal.vue'
export default {
  components: { SharedModal, YorInformationModal },
  setup() {
    const open = ref(false)
    const openModal = () => {
      open.value = true
    }
    const closeModal = () => {
      open.value = false
    }
    return {
      open,
      openModal,
      closeModal
    }
  }
}
</script>
