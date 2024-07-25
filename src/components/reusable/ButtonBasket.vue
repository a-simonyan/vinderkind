<template>
  <div
    v-if="loader"
    class="px-[15px] cursor-pointer flex items-center bg-vivid-purple h-[43px] sm:h-[54px] rounded-small justify-center py-[6px] sm:py-3 w-full text-white gap-[13px] sm:gap-5 mt-3 hover:opacity-85 transition-all duration-200 ease-linear [&_.loader]:!min-h-5 [&_.loader]:!h-5 [&_.item]:!w-6 [&_.item]:!h-6 [&_.item]:!border-2"
  >
    <CustomLoader />
  </div>
  <div v-else class="w-full">
    <div
      v-if="currentData.count < 1"
      @click.prevent="handleChangeCard(currentData)"
      class="px-[15px] cursor-pointer flex items-center bg-vivid-purple h-[43px] sm:h-[54px] rounded-small justify-center py-[6px] sm:py-3 w-full text-white gap-[13px] sm:gap-5 mt-3 hover:opacity-85 transition-all duration-200 ease-linear"
    >
      <div class="flex gap-[21px] justify-center items-center">
        <IconBasket class="[&_path]:stroke-white w-[26px]" />
        <span class="text-base/[22px] sm:text-[21px] font-bold font-sans"
          >${{ currentData.price }}</span
        >
      </div>
    </div>
    <div
      v-else
      class="flex items-center w-full justify-between px-2 sm:px-[15px] h-[43px] sm:h-[54px] cursor-pointer bg-vivid-purple rounded-small py-3 text-white mt-3 hover:opacity-85 transition-all duration-200 ease-linear"
    >
      <button
        @click="handleChangeCard(currentData, false)"
        class="w-1/4 h-full flex justify-center items-center"
      >
        <IconMinus class="[&_path]:fill-white w-4 h-4" />
      </button>
      <span
        class="w-3/4 text-[15px] line-clamp-1 sm:text-[21px]/[28px] text-wgite font-sans font-bold text-center"
        >{{ currentData.count }} in Cart</span
      >
      <button
        @click="handleChangeCard(currentData)"
        class="w-1/4 h-full flex justify-center items-center"
      >
        <IconPlus class="[&_path]:fill-white w-4 h-4" />
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import IconBasket from '@/components/icons/IconBasket.vue'
import IconMinus from '../icons/IconMinus.vue'
import IconPlus from '../icons/IconPlus.vue'
import { useCartsStore } from '@/stores/carts'
import CustomLoader from '@/components/reusable/CustomLoader.vue'
export default defineComponent({
  components: { IconBasket, IconMinus, IconPlus, CustomLoader },
  setup(props) {
    const { updateCount, addCart, carts } = useCartsStore()
    const loader = ref(false)
    let currentData = ref({ count: 0, price: 0 })
    const filtered = carts.filter(({ id }: { id: number }) => id === props.data.id)
    currentData.value = filtered.length ? filtered[0] : props.data
    const handleChangeCard = (data: {}, add?: Boolean) => {
      loader.value = true
      setTimeout(() => {
        addCart(data, add)
        loader.value = false
      }, 300)
    }
    return {
      updateCount,
      addCart,
      loader,
      handleChangeCard,
      carts,
      currentData
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
