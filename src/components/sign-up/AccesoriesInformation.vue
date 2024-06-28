<template>
  <div class="border-b border-light-gray pb-[27px]">
    <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold mt-[17px] mb-[13px]">
      Accessories
    </h5>
    <div v-if="lastAccessories?.length">
      <div v-for="(cart, index) in lastAccessories" :key="index" class="w-full flex justify-center">
        <div class="rounded-small border border-charcoal py-4 px-4 sm:px-6 flex gap-5 w-full">
          <div @click="handleAddAccesories(cart)" class="h-max">
            <SharedCheckBox v-model="checked" />
          </div>
          <div class="w-[132px] h-[132px]">
            <img :src="cart.img" alt="accessories" class="w-full h-full object-contain" />
          </div>
          <div class="flex flex-col gap-[7px] mt-2">
            <span class="text-vivid-purple text-[19px]/[22px] font-raleway font-semibold">
              {{ cart.name }}
            </span>
            <span class="text-[21px] font-bold font-sans">${{ cart.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import SharedCheckBox from '@/components/reusable/SharedCheckBox.vue'
import { useAccessoriesStore } from '@/stores/accessories'
import { useTotalPaymentStore } from '@/stores/totalPayment'
export default defineComponent({
  components: { SharedCheckBox },
  setup() {
    const { totalPayment, handleAddAccesories } = useTotalPaymentStore()
    let checked = ref(false)
    const lastAccessoriesStore = useAccessoriesStore()

    const lastAccessories = ref([
      {
        img: '',
        name: '',
        price: ''
      } as any
    ])

    onMounted(async () => {
      await lastAccessoriesStore.fetchLastAccessories()
      lastAccessories.value = lastAccessoriesStore.lastAccessories
    })

    return {
      checked,
      lastAccessories,
      totalPayment,
      handleAddAccesories
    }
  }
})
</script>
