<template>
  <div
    class="w-full lg:w-1/2 pt-10 sm:pt-[46px] sm:pb-10 pl-10 pr-[23px] sm:pr-[54px] rounded-small bg-white lg:rounded-none -mt-1 lg:mt-0"
  >
    <h5 class="text-xl/[27px] sm:text-[22px]/[26px] font-bold sm:font-semibold">
      Sign up for a Vinderkind Subscription
    </h5>
    <div class="mt-[22px] sm:mt-[38px] relative">
      <CustomInput
        placeholder="Delivery ZIP Code"
        type="number"
        required
        value="zipCode"
        label="Enter the delivery ZIP Code"
        otherStyles="border-black shadow-gray"
        v-model="zipCode"
        :error="
          !validZips.includes(zipCode) && zipCode.length
            ? 'We currently don’t deliver to this zip code. Please check back in the coming months.'
            : ''
        "
      />
      <IconCheck v-if="validZips.includes(zipCode)" class="absolute bottom-[17px] right-[22px]" />
    </div>
    <div :class="validZips.includes(zipCode) ? 'opacity-100' : 'opacity-100'">
      <h5 class="text-xl/[27px] sm:text-[22px]/[26px] font-bold sm:font-semibold mt-[31px] sm:mt-6">
        Subscription Preference
      </h5>
      <div
        class="border rounded-small shadow-gray border-black pb-[23px] sm:pb-[29px] pt-10 relative mt-10 sm:mt-[49px] mb-5"
      >
        <div class="flex w-full absolute -top-6 justify-center">
          <div
            class="max-w-[282px] sm:max-w-[308px] w-full bg-vivid-purple rounded-[32px] px-[9px] py-[6px] flex jus"
          >
            <button
              v-for="plan in plans"
              :key="plan.id"
              class="w-full flex justify-center items-center gap-2 py-[6px] transition-all ease-linear duration-200"
              :class="choosePlan === plan.id ? 'bg-white text-black rounded-[32px]' : 'text-white'"
              @click="updateChoosePlan(plan.id)"
            >
              <span v-if="plan.savings" class="text-xs/[14px] font-bold"
                >Save {{ plan.savings }}</span
              >
              <span class="text-[19px]/[24px] font-hebrew font-bold">{{ plan.name }}</span>
            </button>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-1">
            <span class="text-[21px] font-medium">טעקע</span>
            <span class="text-[30px] font-bold">${{ plans[choosePlan]?.preIssue }}</span>
          </div>
          <span class="text-[17px] font-hebrew">באצאלט יערליך {{ plans[choosePlan]?.price }}</span>
        </div>
      </div>
      <SharedCheckBox label="Auto Renew Yearly" v-model="renewYear" />
      <div class="mt-[27px] sm:mt-[29px]">
        <SharedSelect
          label="Choose your first publication on this subscription"
          :data="publication"
        />
      </div>

      <div
        class="font-raleway flex gap-3 items-center pl-[17px] pr-[54px] mt-[25px] sm:mt-[28px] cursor-pointer py-2 w-max bg-lavender rounded-[18px] text-vivid-purple relative"
      >
        <IconBasket class="[&_path]:stroke-vivid-purple w-4 h-4" />
        <span class="text-[13px] sm:text-base">Order Previous Publications</span>
        <img
          src="../../assets/images/purple-arrow.png"
          alt="arrow"
          class="absolute w-[13px] h-2 right-5"
          draggable="false"
        />
      </div>
      <div
        class="rounded-small border border-black pt-[26px] pb-[23px] px-[21px] flex flex-col gap-4 mt-[21px] mb-[27px]"
      >
        <div v-for="(item, index) in publication" :key="index" class="">
          <SharedCheckBox :label="item.label" v-model="renewYear" />
        </div>
      </div>
      <div class="pt-[27px] border-t border-t-light-gray">
        <SharedCheckBox label="It’s a Gift" v-model="renewYear" />
      </div>
      <YourInformation :yourInfo="yourInfo" />
      <div class="pt-6 pb-[31px] border-b border-b-light-gray">
        <SharedCheckBox label="Sign up for Vinderkind emails" v-model="renewYear" />
      </div>
      <DeliverInformation :deliveryInfo="deliveryInfo" />
      <AccesoriesInformation />
      <PaymentInformation />
      <button
        class="mt-[15px] mb-[18px] bg-vivid-purple w-full py-4 text-[21px]/[25px] text-white rounded-small font-bold hover:opacity-90 transition-all ease-in duration-150"
      >
        Subscribe & Pay $219.98
      </button>
      <div class="text-[13px]/[17px] flex flex-col">
        <span class="text-center">By clicking on the subscribe button, you agree with our </span>
        <router-link to="/terms" class="text-center text-vivid-purple">
          terms and conditions & cancelation policy.
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CustomInput from '@/components/reusable/CustomInput.vue'
import SharedCheckBox from '@/components/reusable/SharedCheckBox.vue'
import SharedSelect from '@/components/reusable/SharedSelect.vue'
import YourInformation from '@/components/sign-up/YourInformation.vue'
import DeliverInformation from '@/components/sign-up/DeliverInformation.vue'
import PaymentInformation from '@/components/sign-up/PaymentInformation.vue'
import AccesoriesInformation from '@/components/sign-up/AccesoriesInformation.vue'
import IconBasket from '@/components/icons/IconBasket.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import { defineComponent, ref } from 'vue'
import { usePlansStore } from '@/stores/plans'
export default defineComponent({
  components: {
    CustomInput,
    SharedCheckBox,
    SharedSelect,
    YourInformation,
    DeliverInformation,
    PaymentInformation,
    IconBasket,
    AccesoriesInformation,
    IconCheck
  },
  data() {
    return {
      zipCode: '',
      yourInfo: {
        name: '',
        email: '',
        phone: ''
      },
      deliveryInfo: {
        address: '',
        address2: '',
        city: ''
      }
    }
  },

  setup() {
    const { plans, publication } = usePlansStore()
    let choosePlan = ref(1)
    let validZips = ['00000']
    let renewYear = ref(false)
    const updateChoosePlan = (planId: number) => {
      choosePlan.value = planId
    }
    return {
      validZips,
      plans,
      publication,
      choosePlan,
      updateChoosePlan,
      renewYear
    }
  }
})
</script>
