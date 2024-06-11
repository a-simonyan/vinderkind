<template>
  <div class="bg-golden-yellow bg-no-repeate relative min-h-[350px] lg:min-h-[399px]">
    <div class="flex container">
      <div
        class="pb-[31px] right-0 bottom-0 pr-[23px] sm:px-[56px] sm:pt-[66px] sm:pb-[94px] flex flex-col gap-3 sm:gap-[33px] z-[8] absolute sm:relative"
      >
        <h2
          class="text-vivid-purple text-[37px]/[36px] sm:text-[65px]/[60px] font-bold font-hebrew flex flex-col text-end sm:text-start"
        >
          <span> הערט,ליינט</span>
          <span>!און האט הנאה</span>
        </h2>
        <router-link
          to="/sign-up"
          class="h-[54px] justify-center bg-vivid-purple max-w-[132px] w-full py-1 flex-col items-center rounded-small px-[22px] flex transition-all duration-300 ease-in hover:opacity-80 self-end sm:self-auto"
        >
          <span class="text-lg/[23px] font-bold font-hebrew text-white">סובסקרייבט</span>
          <span class="text-[13px]/[15px] font-extrabold text-pinkish-purple">Subscribe</span>
        </router-link>
      </div>
      <img
        src="../../assets/images/home-banner.svg"
        alt="banner"
        draggable="false"
        class="absolute right-0 top-0 h-full object-cover hidden sm:block"
      />
      <img
        src="../../assets/images/home-banner-mobile.svg"
        alt="mobile banner"
        draggable="false"
        class="absolute right-0 top-0 h-full w-full object-cover block sm:hidden"
      />
    </div>
  </div>
  <div class="bg-purpleShade bg-no-repeat bg-cover bg-bottom">
    <div
      class="container pb-[49px] pt-[59px] sm:py-[47px] flex justify-center flex-col items-center gap-[29px] sm:gap-[26px]"
    >
      <h2 class="text-white text-[35px]/[46px] sm:text-[47px]/[61px] font-bold font-hebrew">
        וואונדערקונד ניגן
      </h2>
      <audio-player :data="data" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import AudioPlayer from '@/components/reusable/AudioPlayer.vue'
export default defineComponent({
  components: { AudioPlayer },
  data: function () {
    return {
      data: {
        id: '1',
        mp3: '/audio/vinderkind.mp3'
      }
    }
  }
})
</script>
