<template>
  <div class="w-full">
    <swiper :breakpoints="points" :spaceBetween="30" :initialSlide="data.length">
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
  name: 'HelloWorld',
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
