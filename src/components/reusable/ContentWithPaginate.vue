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
    <div v-if="paginatedItems.length">
      <div
        dir="rtl"
        class="grid grid-cols-2 sm:flex lg:justify-start justify-center sm:flex-row sm:flex-wrap gap-[13px] sm:gap-[30px] max-w-[1100px] w-full m-auto mt-10 sm:mt-[35px] mb-[35px] sm:mb-[45px]"
      >
        <div
          v-for="(cart, index) in paginatedItems"
          :key="index"
          class="flex justify-center sm:w-1/3 md:w-[252px]"
        >
          <CustomCart :data="cart" :customClass="customClass" :preview="preview" />
        </div>
      </div>
      <SharedPagination
        :total-items="data.length"
        :items-per-page="8"
        :current-page="currentPage"
        @page-changed="handlePageChange"
      />
    </div>
    <div v-else><CustomLoader /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import CustomCart from '../reusable/CustomCart.vue'
import SharedPagination from '../reusable/SharedPagination.vue'
import { useRoute, useRouter } from 'vue-router'
import CustomLoader from '@/components/reusable/CustomLoader.vue'

export default defineComponent({
  components: { CustomCart, SharedPagination, CustomLoader },
  data: function () {
    return {
      customClass:
        'max-w-none [&_img]:h-[193px] [&_img]:sm:h-[285px] [&_img]:w-full [&_img]:object-contain [&_img]:min-[400px]:object-cover [&_img]:sm:object-contain [&_.label]:!w-[90%] [&_.label]:min-[400px]:!w-[80%] [&_.label]:sm:!w-[70%]'
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
    },
    preview: {
      type: Boolean
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
