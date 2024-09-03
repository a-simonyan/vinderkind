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
          <div v-if="covers?.length" class="relative w-full max-w-[600px] h-[600px] ml-14 mt-10">
            <div
              v-for="(cart, index) in covers.slice(0, 4)"
              :key="index"
              class="absolute"
              :style="getTransformStyle(index)"
            >
              <img
                :src="cart.image"
                class="max-w-[300px] xl:max-w-[340px] h-full w-full object-cover"
              />
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
  },
  methods: {
    getTransformStyle(index: number) {
      // Dynamically generate the transform matrix based on the index
      const skewValues = [0.07, 0.19, 0.33, 0.49] // Adjust these values for more/less skew
      const scaleValues = [1, 0.98, 0.95, 0.91] // Adjust these values for more/less scaling
      const skewFactor = skewValues[index % 4]
      const scale = scaleValues[index % 4]
      const transform = `matrix(${scale}, ${skewFactor}, ${-skewFactor}, ${scale}, 0, 0)`
      const zIndex = this.covers.length - index
      const left = `${index * 35}px`
      return {
        transform,
        zIndex,
        left
      }
    }
  }
})
</script>
