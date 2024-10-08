<template>
  <div
    class="group flex flex-col items-center rounded-small border border-vivid-purple pt-[7px] pb-[15px] max-w-[209px] sm:max-w-[258px] w-full relative"
    :class="customClass"
  >
    <div
      v-if="data.label"
      class="w-[70%] h-8 absolute z-[8] right-0 top-[18px] text-vivid-purple text-base line-clamp-1 font-bold flex items-center justify-end label"
    >
      <img src="../../assets/images/label.svg" class="!h-max absolute -right-2" />
      <span
        class="absolute text-end right-2 md:right-3 top-[5px] md:top-[2px] line-clamp-1 font-hebrew text-xs sm:text-sm md:text-base"
      >
        {{ data.label }}</span
      >
    </div>
    <div @click="openModal" class="relative w-full">
      <div
        v-if="preview"
        class="absolute h-full invisible items-center opacity-0 w-full flex justify-center group-hover:visible group-hover:opacity-100 transition-all ease-linear duration-300"
      >
        <button
          @click="openModal"
          class="rounded-[22px] hidden items-center gap-2 bg-[#ffffffc7] py-[10px] px-3 max-w-[160px] h-[44px] sm:flex"
        >
          <IconSearch />
          <span class="text-xl font-bold text-vivid-purple font-hebrew">כאפ א בליק</span>
        </button>
      </div>
      <div v-if="data.img">
        <img :src="data.img" alt="cart" draggable="false" class="h-[285px] object-contain" />
      </div>
      <div v-else>
        <img
          src="../../assets/images/broken.svg"
          alt="cart"
          draggable="false"
          class="h-[285px] object-contain"
        />
      </div>
    </div>
    <div class="px-2 sm:px-[13px] flex flex-col items-center w-full">
      <span
        class="text-[15px]/[16px] sm:text-lg/[23px] font-medium sm:font-bold text-vivid-purple font-hebrew mt-[10px] block"
        >{{ data.name }}</span
      >
      <span class="text-lg/[19px] sm:text-xl/[27px] text-vivid-purple font-hebrew">{{
        data.description
      }}</span>
      <ButtonBasket :data="data" />
    </div>
  </div>
  <SharedModal v-model="open" v-if="preview" customStyle="w-full">
    <CartPreviewModal :data="data" />
  </SharedModal>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ButtonBasket from './ButtonBasket.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import SharedModal from '@/components/reusable/SharedModal.vue'
import CartPreviewModal from '@/components/reusable/CartPreviewModal.vue'

export default defineComponent({
  components: { ButtonBasket, IconSearch, SharedModal, CartPreviewModal },
  props: {
    data: {
      type: Object,
      required: true
    },
    customClass: {},
    preview: {
      type: Boolean
    }
  },
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
})
</script>
<style>
.label::before {
  transform: skewX(30deg);
}
.label::after {
  transform: skewX(-30deg);
}
</style>
