<template>
  <div class="w-full lg:w-1/2 bg-vivid-purple rounded-r-none lg:rounded-r-small">
    <div
      class="bg-babyMobile sm:bg-gradientBaby bg-full h-full bg-no-repeat font-bold font-hebrew text-[42px]/[47px] text-white flex flex-col justify-between"
    >
      <div>
        <div class="pb-[34px] lg:pb-0 pt-[99px] sm:pt-[219px] pr-[23px] lg:pr-[65px]">
          <h4 class="text-end text-[29px]/[38px] lg:text-[42px]">שרייבט אייך איין</h4>
          <h4 class="text-end text-[29px]/[38px] lg:text-[42px]">צו א חודש’ליכע פארגעניגן</h4>
          <div dir="rtl" class="hidden lg:block">
            <ul class="list-disc text-[19px]/[28px] font-hebrew text-white font-normal mt-5">
              <li>חודש’ליך דערליווערט א רייכע USB קאסעטע פון 2 שעה הערן מיט אינטערעסאנטע תוכן</li>
              <li>באגלייט מיט א מייסטערהאפטיגע אויסגאבע וואס מאכט דעם קאסעטע פיל אינטערעסאנטער</li>
              <li>כסדר'דיגע הערליכע תוכן און שיינע מתנות</li>
              <li>מעשיות, ניגונים, פארשטעלונגען, און שעות פון ערליכע געשמאקע אינטערהאלטונג</li>
            </ul>
          </div>
        </div>
        <div class="hidden justify-center mt-4 lg:flex">
          <div v-if="covers?.length" class="relative w-full grid grid-cols-2 gap-4 mt-24 -ml-4">
            <div
              v-for="(cart, index) in covers"
              :key="index"
              class="relative max-w-[263px] h-[350px] w-full transform transition-transform duration-300 rotate-12"
              :class="{
                'ml-10 xl:ml-20 -mt-10': index % 2 === 0,
                '-mt-20': index % 2 !== 0,
                '-ml-10': index === 3
              }"
            >
              <img :src="cart.image" class="max-w-[263px] h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useOrderStore } from '@/stores/sign-up'
interface Cover {
  image: string
  name: string
}
export default defineComponent({
  components: {},
  setup() {
    const store = useOrderStore()
    const covers = ref<Cover[]>([])

    onMounted(async () => {
      await store.fetchCovers()
      covers.value = store.covers
    })

    return {
      covers
    }
  }
})
</script>
