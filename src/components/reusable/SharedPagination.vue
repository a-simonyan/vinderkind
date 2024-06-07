<template>
  <div class="flex justify-center gap-4">
    <router-link
      :to="{ path: $route.path, query: { page: currentPage + 1 } }"
      :class="currentPage < totalPages ? 'cursor-pointer opacity-100' : 'opacity-50 cursor-default'"
      class="flex items-center rotate-180"
    >
      <img
        src="../../assets/images/arrow.png"
        alt="arrow"
        class="w-6 h-6 rotate-180"
        draggable="false"
      />
    </router-link>
    <div class="flex gap-[17px] flex-row-reverse">
      <router-link
        v-for="pageNumber in visiblePageNumbers"
        :key="pageNumber"
        :to="{ path: $route.path, query: { page: pageNumber } }"
        class="text-[19px] font-sans font-bold w-[45px] h-[45px] rounded-full flex justify-center items-center"
        :class="{
          'bg-vivid-purple text-white': pageNumber === currentPage,
          'bg-white hover:bg-lilac text-vivid-purple border-[3px] border-pale-gray transition-all ease-linear duration-100':
            pageNumber !== currentPage
        }"
      >
        {{ pageNumber }}
      </router-link>
    </div>
    <router-link
      :to="{ path: $route.path, query: { page: currentPage - 1 } }"
      :class="currentPage > 1 ? 'cursor-pointer opacity-100' : 'opacity-50 cursor-default'"
      class="flex items-center rotate-180"
    >
      <img src="../../assets/images/arrow.png" alt="arrow" class="w-6 h-6" draggable="false" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      currentPage: parseInt(this.$route.query.page as string) || 1
    }
  },
  watch: {
    '$route.query.page'(newPage) {
      this.currentPage = parseInt(newPage) || 1
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage)
    },
    visiblePageNumbers() {
      const startPage = Math.max(1, this.currentPage - 2)
      const endPage = Math.min(this.totalPages, startPage + 4)
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
    }
  }
})
</script>
