<template>
  <div class="min-h-screen flex items-center overflow-x-hidden">
    <div
      class="flex items-center pb-[43px] pt-[17px] px-4 sm:px-10 sm:py-10 w-full justify-center gap-[45px] h-full flex-col-reverse lg:flex-row overflow-y-auto"
    >
      <div class="flex sm:hidden w-[230px] self-start">
        <ButtonBasket :data="data" />
      </div>
      <div class="w-[88vw] sm:w-[472px] h-[400px] sm:h-[567px] poster">
        <iframe :src="data.pdf" width="450px" height="550px"></iframe>
      </div>
      <div class="flex flex-col">
        <span class="text-[29px]/[32px] text-vivid-purple font-hebrew font-bold font-reforma">{{
          data.name
        }}</span>
        <span class="text-2xl/[27px] text-vivid-purple mt-1 block font-reforma">{{
          data.description || data.info
        }}</span>
        <span class="text-[21px]/[28px] font-sans font-bold mt-[18px] sm:mt-[33px] mb-[17px] block"
          >Audio Sample</span
        >

        <AudioPlayer :data="data" />
        <div class="hidden sm:flex mt-6">
          <ButtonBasket :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import AudioPlayer from '@/components/reusable/AudioPlayer.vue'
import ButtonBasket from './ButtonBasket.vue'
export default defineComponent({
  components: { AudioPlayer, ButtonBasket },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped>
.poster iframe #document img {
  height: 550px;
}
</style>
