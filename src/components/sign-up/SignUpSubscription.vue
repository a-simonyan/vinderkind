<template>
  <CustomForm v-slot="{ errors }" @submit="onSubmit" class="w-full lg:w-1/2">
    <div
      class="w-full pt-10 sm:pt-[46px] sm:pb-10 pl-10 pr-[23px] sm:pr-[54px] rounded-small bg-white lg:rounded-none -mt-1 lg:mt-0"
    >
      <h5 class="text-xl/[27px] sm:text-[22px]/[26px] font-bold sm:font-semibold">
        Sign up for a Vinderkind Subscription
      </h5>
      <div class="mt-[22px] sm:mt-[38px] relative">
        <span class="text-lg font-raleway pb-[13px] block">Enter the delivery ZIP Code</span>
        <div class="relative">
          <Field
            name="zip"
            :rules="[required as GenericValidateFunction, zipValidation as GenericValidateFunction]"
            class="w-full border rounded-small shadow-gray pt-4 pb-[13px] px-[18px] text-xl border-black placeholder:text-silver"
            placeholder="Delivery ZIP Code"
            v-model="zipCode"
          />
          <span class="text-red-500 text-base pt-1 block">{{ errors.zip }}</span>
          <IconCheck v-if="showIconCheck" class="absolute top-5 right-[22px]" />
        </div>
      </div>
      <div
        :class="showIconCheck ? 'opacity-100' : 'opacity-50 pointer-events-none'"
        class="transition-all duration-300 ease-linear"
      >
        <h5
          class="text-xl/[27px] sm:text-[22px]/[26px] font-bold sm:font-semibold mt-[31px] sm:mt-6"
        >
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
                :class="
                  choosePlan === plan.id ? 'bg-white text-black rounded-[32px]' : 'text-white'
                "
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
              <span class="text-3xl font-bold">${{ plans[choosePlan]?.preIssue }}</span>
            </div>
            <span class="text-[17px] font-hebrew"
              >באצאלט יערליך {{ plans[choosePlan]?.price }}</span
            >
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
        <YourInformation :yourInfo="yourInfo" :errors="errors" />
        <div class="pt-6 pb-[31px] border-b border-b-light-gray">
          <SharedCheckBox label="Sign up for Vinderkind emails" v-model="renewYear" />
        </div>
        <DeliverInformation :deliveryInfo="deliveryInfo" :errors="errors" />
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
  </CustomForm>
</template>

<script lang="ts">
import SharedCheckBox from '@/components/reusable/SharedCheckBox.vue'
import SharedSelect from '@/components/reusable/SharedSelect.vue'
import YourInformation from '@/components/sign-up/YourInformation.vue'
import DeliverInformation from '@/components/sign-up/DeliverInformation.vue'
import PaymentInformation from '@/components/sign-up/PaymentInformation.vue'
import AccesoriesInformation from '@/components/sign-up/AccesoriesInformation.vue'
import IconBasket from '@/components/icons/IconBasket.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import { computed, defineComponent, ref } from 'vue'
import { usePlansStore } from '@/stores/plans'
import { Field, Form as CustomForm, type GenericValidateFunction } from 'vee-validate'

export default defineComponent({
  components: {
    SharedCheckBox,
    SharedSelect,
    YourInformation,
    DeliverInformation,
    PaymentInformation,
    IconBasket,
    AccesoriesInformation,
    IconCheck,
    Field,
    CustomForm
  },
  data() {
    return {
      yourInfo: [
        {
          placeholder: 'Full name',
          field: 'name',
          valid: this.required
        },
        {
          placeholder: 'Email',
          field: 'email',
          valid: this.emailValidation
        }
      ],
      deliveryInfo: [
        {
          placeholder: 'Address',
          field: 'address'
        },
        {
          placeholder: 'Address Line 2',
          field: 'address2'
        },
        {
          placeholder: 'City, State, ZIP',
          field: 'city'
        }
      ]
    }
  },

  setup() {
    let zipCode = ref('')
    const { plans, publication } = usePlansStore()
    let choosePlan = ref(1)
    let validZips = ['00000']
    let renewYear = ref(false)

    function required(value: string) {
      return value ? true : 'This field is required'
    }

    function zipValidation(value: string) {
      return value === '00000' ? true : 'Please enter a valid ZIP code'
    }

    function onSubmit(values: { [key: string]: any }) {}

    function emailValidation(value: string) {
      const emailRegex = /\S+@\S+\.\S+/
      return emailRegex.test(value) ? true : 'Invalid email format'
    }

    const updateChoosePlan = (planId: number) => {
      choosePlan.value = planId
    }
    const showIconCheck = computed(() => {
      return zipCode.value === '00000'
    })
    return {
      validZips,
      plans,
      publication,
      choosePlan,
      updateChoosePlan,
      renewYear,
      required,
      onSubmit,
      zipValidation,
      emailValidation,
      showIconCheck,
      zipCode
    }
  }
})
</script>
