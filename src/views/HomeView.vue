<template>
  <HomeBanner />
  <HomeIssues />
  <HomeAccessories />
  <HomeFooter />
</template>
<script lang="ts">
import HomeBanner from '@/components/home/HomeBanner.vue'
import HomeIssues from '@/components/home/HomeIssues.vue'
import HomeAccessories from '@/components/home/HomeAccessories.vue'
import HomeFooter from '@/components/home/HomeFooter.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { HomeBanner, HomeIssues, HomeAccessories, HomeFooter }
})
</script>
