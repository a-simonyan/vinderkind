<template>
  <div>
    <ContentWithPaginate v-if="accessories" :page="page" :data="accessories" />
    <div v-else>
      HERE IS LOADING
    </div>
  </div>
</template>
<script lang="ts">
import ContentWithPaginate from '@/components/reusable/ContentWithPaginate.vue'
import { useAccessoriesStore } from '@/stores/accessories'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  components: { ContentWithPaginate },
  setup() {
    const accessoriesStore = useAccessoriesStore()

    const accessories = ref([])

    onMounted(async () => {
      await accessoriesStore.fetchAccessories()
      accessories.value = accessoriesStore.accessories
    })

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
