<template>
  <ContentWithPaginate :page="page" :data="allIssues" :preview="true" />
</template>
<script lang="ts">
import ContentWithPaginate from '@/components/reusable/ContentWithPaginate.vue'
import { useIssuesStore } from '@/stores/issues'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { ContentWithPaginate },
  setup() {
    const { allIssues } = useIssuesStore()
    return {
      allIssues
    }
  },
  data() {
    return {
      page: {
        title: 'טעקעס',
        enTitle: 'Issues'
      }
    }
  }
})
</script>
