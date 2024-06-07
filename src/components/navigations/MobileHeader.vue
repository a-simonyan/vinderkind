<template>
  <div class="w-[77%] h-full bg-white">
    <button class="absolute top-[29px] right-[31px]" @click="toggleModal()">
      <IconClose />
    </button>
    <div>
      <div class="flex flex-col w-full justify-between pt-[50px] gap-9">
        <router-link
          :to="link.link"
          v-for="(link, index) in links"
          :key="index"
          class="flex flex-col items-center justify-center group gap-1"
          @click="toggleModal()"
        >
          <span
            class="text-[19px]/[20px] text-vivid-purple font-medium font-hebrew group-hover:text-golden-yellow transition-all duration-300 ease-in"
            >{{ link.title }}</span
          >
          <span
            class="text-light-purple text-[13px]/[15px] font-semibold group-hover:text-golden-yellow"
            >{{ link.subTitle }}</span
          >
        </router-link>
        <router-link
          @click="toggleModal()"
          to="/sign-up"
          class="self-center bg-golden-yellow max-w-[132px] w-full py-1 flex-col items-center rounded-small px-[22px] [&_span]:text-vivid-purple flex hover:bg-lavender transition-all duration-300 ease-in"
        >
          <span class="text-[17px]/[22px] font-bold font-hebrew">סובסקרייבט</span>
          <span class="text-[13px]/[15px] font-extrabold">Subscribe</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import IconClose from '@/components/icons/IconClose.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { IconClose },
  data() {
    return {
      links: [
        { title: 'וואס איז וואונדערקינד', subTitle: 'About VinderKind', link: '' },
        { title: 'טעקעס', subTitle: 'Issues', link: '/issues' },
        { title: 'געצייג', subTitle: 'Accessories', link: '/accessories' },
        { title: 'לאמיר רעדן', subTitle: 'Contact', link: '/contact' },
        { title: '???', subTitle: 'Manage Account', link: '/about' }
      ]
    }
  },
  props: {
    toggleModal: {
      type: Function,
      required: true
    }
  }
})
</script>
