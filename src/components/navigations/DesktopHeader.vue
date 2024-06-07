<template>
  <div class="font-raleway sticky top-0 bg-vivid-purple flex justify-center z-10">
    <div class="py-7 px-[23px] pr-4 flex justify-between container lg:py-5 lg:px-6 relative">
      <div class="flex gap-5 items-center">
        <router-link
          to="/sign-up"
          class="bg-golden-yellow max-w-[132px] w-full py-1 flex-col items-center rounded-small px-[22px] [&_span]:text-vivid-purple hidden lg:flex hover:bg-lavender transition-all duration-300 ease-in"
        >
          <span class="text-[17px]/[22px] font-bold font-hebrew">סובסקרייבט</span>
          <span class="text-[13px]/[15px] font-extrabold">Subscribe</span>
        </router-link>
        <button class="block lg:hidden" @click="toggleModal">
          <IconBurger />
        </button>
        <div class="flex gap-[11px] items-center h-max">
          <router-link
            to="/cart"
            class="group relative shake_div"
            :class="{
              'shake-in': isShaking
            }"
          >
            <span
              v-if="carts.length"
              class="absolute -right-1 w-[17px] h-[17px] bg-fire-red rounded-full text-[10px] font-bold flex justify-center items-center text-white font-hebrew"
            >
              {{ carts.length }}</span
            >
            <IconBasket
              class="group-hover:[&_path]:stroke-lavender [&_path]:transition-all [&_path]:ease-linear [&_path]:duration-300"
            />
          </router-link>
          <router-link to="/sign-in" class="hidden group lg:block">
            <IconUser
              class="group-hover:[&_path]:stroke-lavender [&_path]:transition-all [&_path]:ease-linear [&_path]:duration-300"
            />
          </router-link>
        </div>
      </div>
      <div class="hidden max-w-[590px] w-full justify-between lg:flex">
        <router-link
          :to="link.link"
          v-for="(link, index) in links"
          :key="index"
          class="flex flex-col items-center justify-center group"
        >
          <span
            class="text-[17px]/[22px] text-white font-bold font-hebrew group-hover:text-golden-yellow transition-all duration-300 ease-in"
            >{{ link.title }}</span
          >
          <span
            class="text-light-purple text-[13px]/[15px] font-semibold group-hover:text-golden-yellow"
            >{{ link.subTitle }}</span
          >
        </router-link>
      </div>
      <router-link to="/" class="max-w-[195px] sm:max-w-[289px] w-full relative">
        <img
          src="../../assets/footer_logo.png"
          draggable="false"
          alt="logo"
          class="absolute -top-2"
        />
      </router-link>
    </div>
  </div>
  <div
    class="fixed top-0 h-full z-10 backdrop-blur-sm lg:hidden transition-all ease-linear duration-500 w-full"
    :class="{
      '-translate-x-full opacity-0': !showModal,
      'translate-x-0 opacity-100': showModal
    }"
  >
    <MobileHeader :toggle-modal="toggleModal" />
  </div>
</template>

<script lang="ts">
import MobileHeader from '@/components/navigations/MobileHeader.vue'
import IconBasket from '@/components/icons/IconBasket.vue'
import IconUser from '@/components/icons/IconUser.vue'
import IconBurger from '@/components/icons/IconBurger.vue'
import { useCartsStore } from '@/stores/carts'

export default {
  components: { MobileHeader, IconBasket, IconUser, IconBurger },
  data() {
    return {
      links: [
        { title: 'לאמיר רעדן', subTitle: 'Contact', link: '/contact' },
        { title: 'געצייג', subTitle: 'Accessories', link: '/accessories' },
        { title: 'טעקעס', subTitle: 'Issues', link: '/Issues' },
        { title: 'וואס איז וואונדערקינד', subTitle: 'About VinderKind', link: '/about' }
      ],
      showModal: false,
      isShaking: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    startShake() {
      this.isShaking = true
      setTimeout(() => {
        this.isShaking = false
      }, 400)
    }
  },
  setup() {
    const { carts } = useCartsStore()
    return {
      carts
    }
  },
  watch: {
    'carts.length'() {
      if (this.carts.length) {
        this.startShake()
      }
    }
  }
}
</script>

<style>
.shake-in {
  animation: shakeCart 0.4s ease-in-out forwards;
}
@keyframes shakeCart {
  25% {
    transform: translateX(6px);
  }
  50% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
