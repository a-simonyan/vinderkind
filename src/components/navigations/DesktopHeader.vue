<template>
  <div class="font-raleway sticky top-0 bg-vivid-purple flex justify-center">
    <div class="py-7 pl-[23px] pr-4 flex justify-between container lg:py-5 lg:px-6">
      <div class="flex gap-5 items-center">
        <button
          class="bg-golden-yellow max-w-[132px] w-full py-1 flex-col items-center rounded-small px-[22px] [&_span]:text-vivid-purple hidden lg:flex hover:bg-lavender transition-all duration-300 ease-in"
        >
          <span class="text-[17px]/[22px] font-bold font-hebrew">סובסקרייבט</span>
          <span class="text-[13px]/[15px] font-extrabold">Subscribe</span>
        </button>
        <button class="block lg:hidden" @click="toggleModal">
          <IconBurger />
        </button>
        <div class="flex gap-[11px] items-center h-max">
          <button class="group">
            <IconBasket
              class="group-hover:[&_path]:stroke-lavender [&_path]:transition-all [&_path]:ease-linear [&_path]:duration-300"
            />
          </button>
          <button class="hidden group lg:block">
            <IconUser
              class="group-hover:[&_path]:stroke-lavender [&_path]:transition-all [&_path]:ease-linear [&_path]:duration-300"
            />
          </button>
        </div>
      </div>
      <div class="hidden max-w-[590px] w-full justify-between lg:flex">
        <button
          v-for="(link, index) in links"
          :key="index"
          :class="[
            'flex flex-col items-center justify-center group',
            { 'xl:pl-[55px]': index === 3 }
          ]"
        >
          <span
            class="text-[17px]/[22px] text-white font-bold font-hebrew group-hover:text-golden-yellow transition-all duration-300 ease-in"
            >{{ link.title }}</span
          >
          <span
            class="text-light-purple text-[13px]/[15px] font-semibold group-hover:text-golden-yellow"
            >{{ link.subTitle }}</span
          >
        </button>
      </div>
      <div class="max-w-[195px] sm:max-w-[289px] w-full relative">
        <img src="../../assets/logo.png" alt="logo" class="absolute -top-2" />
      </div>
    </div>
  </div>
  <div
    class="fixed top-0 h-full bg-light-lavender lg:hidden transition-all ease-linear duration-300"
    :class="{ 'w-0 opacity-0 z-0': !showModal, 'w-full opacity-100 z-10 ': showModal }"
  >
    <MobileHeader :links="links" :toggle-modal="toggleModal" />
  </div>
</template>

<script lang="ts">
import MobileHeader from '@/components/navigations/MobileHeader.vue'
import IconBasket from '@/components/icons/IconBasket.vue'
import IconUser from '@/components/icons/IconUser.vue'
import IconBurger from '@/components/icons/IconBurger.vue'
export default {
  components: { MobileHeader, IconBasket, IconUser, IconBurger },
  data() {
    return {
      links: [
        { title: 'לאמיר רעדן', subTitle: 'Contact' },
        { title: 'געצייג', subTitle: 'Accessories' },
        { title: 'טעקעס', subTitle: 'Issues' },
        { title: 'וואס איז וואונדערקינד', subTitle: 'About VinderKind' }
      ],
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>
