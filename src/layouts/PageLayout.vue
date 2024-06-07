<script lang="ts" setup>
import DesktopHeader from '@/components/navigations/DesktopHeader.vue'
import DesktopFooter from '@/components/navigations/DesktopFooter.vue'
</script>

<template>
  <DesktopHeader />
  <div class="min-h-[calc(100vh-417px)]">
    <router-view></router-view>
  </div>
  <DesktopFooter />
</template>
