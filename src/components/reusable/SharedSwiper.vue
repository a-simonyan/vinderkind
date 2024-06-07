<template>
  <div class="w-full">
    <swiper :breakpoints="points" :spaceBetween="15" :initialSlide="1">
      <swiper-slide v-for="(slideContent, index) in data" :key="index" :virtualIndex="index">
        <slot :index="index" :content="slideContent"></slot>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    points: {
      type: Object,
      required: true
    }
  }
})
</script>
<style>
@media (max-width: 640px) {
  .swiper {
    padding-left: 16px;
  }
}
@media (min-width: 640px) {
  .swiper-wrapper {
    justify-content: center;
  }
}
</style>
