<template>
  <div class="container pt-[27px] sm:pt-[107px] pb-[42px] flex flex-col items-center gap-[43px]">
    <div class="flex items-center justify-center flex-col">
      <h5 class="text-[28px]/[37px] sm:text-3xl/[39px] font-bold text-vivid-purple font-hebrew">
        לעצטיגע טעקעס
      </h5>
      <span class="text-light-purple text-[17px]/[20px] font-semibold font-raleway"
        >Latest Issues
      </span>
    </div>
    <div v-if="!lastIssues.length">
      <CustomLoader />
    </div>
    <div v-else class="max-w-[1100px] w-full pl-0 pr-[23px] sm:px-5 xl:px-0">
      <SharedSwiper :data="lastIssues" :points="points">
        <template #default="{ index, content }">
          <CustomCart :data="content" :key="index" :preview="true" />
        </template>
      </SharedSwiper>
    </div>
    <router-link
      to="/issues"
      class="bg-vivid-purple rounded-small flex flex-col justify-center items-center px-[35px] pt-[6px] pb-[10px] hover:opacity-80 transition-all ease-linear duration-150"
    >
      <span class="text-lg/[23px] text-white font-hebrew font-bold">ווייז אלע</span>
      <span class="text-[13px]/[15px] font-extrabold text-pinkish-purple">Show All</span>
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useIssuesStore } from '@/stores/issues'
import CustomCart from '@/components/reusable/CustomCart.vue'
import SharedSwiper from '@/components/reusable/SharedSwiper.vue'
import CustomLoader from '@/components/reusable/CustomLoader.vue'
export default defineComponent({
  components: { CustomCart, SharedSwiper, CustomLoader },
  data: function () {
    return {
      points: {
        300: { slidesPerView: 1.5 },
        480: { slidesPerView: 2.5 },
        640: { slidesPerView: 3 },
        740: { slidesPerView: 3.5 },
        1024: { slidesPerView: 4.1 }
      }
    }
  },

  setup() {
    const lastIssuesStore = useIssuesStore()

    const lastIssues = ref([])

    onMounted(async () => {
      await lastIssuesStore.fetchLastIssues()
      lastIssues.value = lastIssuesStore.lastIssues
    })

    return {
      lastIssues
    }
  }
})
</script>
