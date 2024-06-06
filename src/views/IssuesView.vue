<template>
  <div>
    <ContentWithPaginate v-if="allIssues" :page="page" :data="allIssues" :preview="true" />
    <div v-else>
      HERE IS LOADING
    </div>
  </div>
</template>
<script lang="ts">
import ContentWithPaginate from '@/components/reusable/ContentWithPaginate.vue'
import { useIssuesStore } from '@/stores/issues'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  components: { ContentWithPaginate },

  setup() {
    const allIssuesStore = useIssuesStore()

    const  allIssues = ref(null);

    onMounted(async () => {
      await allIssuesStore.fetchIssues()
      allIssues.value = allIssuesStore.allIssues;
    })

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
