<template>
  <div
    class="group flex flex-col items-center rounded-small border border-vivid-purple px-2 sm:px-[13px] pt-[7px] pb-[15px] max-w-[209px] sm:max-w-[258px] w-full"
    :class="customClass"
  >
    <div class="relative">
      <div
        v-if="preview"
        class="absolute h-full invisible items-center opacity-0 w-full flex justify-center group-hover:visible group-hover:opacity-100 transition-all ease-linear duration-300"
      >
        <button
          @click="openModal"
          class="rounded-[22px] flex items-center gap-2 bg-[#ffffffc7] py-[10px] px-3 max-w-[160px] h-[44px]"
        >
          <IconSearch />
          <span class="text-xl font-bold text-vivid-purple font-hebrew">כאפ א בליק</span>
        </button>
      </div>
      <img :src="data.img" alt="cart" draggable="false" style="height: 285px;object-fit:contain;"/>
    </div>
    <span
      class="text-[15px]/[16px] sm:text-lg/[23px] font-medium sm:font-bold text-vivid-purple font-hebrew mt-[10px] block"
      >{{ data.name }}</span
    >
    <span class="text-lg/[19px] sm:text-xl/[27px] text-vivid-purple font-hebrew">{{
      data.description
    }}</span>
    <ButtonBasket :data="data" />
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
