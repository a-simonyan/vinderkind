<template>
  <ContentWithPaginate :page="page" :data="accessories" />
</template>
<script lang="ts">
import ContentWithPaginate from '@/components/reusable/ContentWithPaginate.vue'
import { useAccessoriesStore } from '@/stores/accessories'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { ContentWithPaginate },
  setup() {
    const { accessories } = useAccessoriesStore()
    return {
      accessories
    }
  },
  data() {
    return {
      page: {
        title: 'געצייג',
        enTitle: 'Accessories'
      }
    }
  }
})
</script>
