<template>
  <div class="container pt-[31px] sm:pt-[61px] pb-[79px] sm:pb-[133px] px-[23px] xl:px-0">
    <div class="flex flex-col items-center gap-1">
      <h5 class="text-vivid-purple font-hebrew text-[29px]/[20px] font-bold sm:font-semibold">
        {{ page.title }}
      </h5>
      <span class="text-light-purple text-[17px]/[20px] font-raleway font-semibold">
        {{ page.enTitle }}</span
      >
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[13px] sm:gap-[30px] max-w-[1100px] w-full m-auto mt-10 sm:mt-[35px] mb-[35px] sm:mb-[45px]"
    >
      <div v-for="(cart, index) in paginatedItems" :key="index" class="w-full flex justify-center">
        <CustomCart :data="cart" :customClass="customClass" />
      </div>
    </div>
    <SharedPagination
      :total-items="data.length"
      :items-per-page="8"
      :current-page="currentPage"
      @page-changed="handlePageChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import CustomCart from '../reusable/CustomCart.vue'
import SharedPagination from '../reusable/SharedPagination.vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  components: { CustomCart, SharedPagination },
  data: function () {
    return {
      customClass: 'max-w-none'
    }
  },
  props: {
    page: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()

    const currentPage = computed(() => {
      return parseInt(route.query.page as string) || 1
    })

    const paginatedItems = computed(() => {
      const startIndex = (currentPage.value - 1) * 8
      const endIndex = startIndex + 8
      return props.data.slice(startIndex, endIndex)
    })

    const handlePageChange = (pageNumber: number) => {
      router.push({ query: { page: pageNumber } })
    }

    return {
      paginatedItems,
      currentPage,
      handlePageChange
    }
  }
})
</script>
