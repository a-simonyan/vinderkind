<template>
  <CustomForm
    v-slot="{ errors }"
    @submit="onSubmit"
    class="w-full max-w-[524px] m-auto px-5 lg:px-0"
  >
    <div class="w-full pt-10 pb-20 sm:py-[81px]">
      <div class="transition-all duration-300 ease-linear">
        <YourInformation :yourInfo="yourInfo" :errors="errors" />
        <div class="pt-6 pb-[31px] border-b border-b-light-gray">
          <SharedCheckBox label="Sign up for Vinderkind emails" v-model="renewYear" />
        </div>
        <DeliverInformation :deliveryInfo="deliveryInfo" :errors="errors" />
        <GiftInformation :errors="errors" :index="0" />
        <PaymentInformation :errors="errors" :paymentInfo="paymentInfo" />
        <button
          class="mt-[15px] mb-[18px] bg-vivid-purple w-full py-4 text-[21px]/[25px] text-white rounded-small font-bold hover:opacity-90 transition-all ease-in duration-150"
        >
          Subscribe & Pay $219.98
        </button>
        <div class="text-[13px]/[17px] flex justify-center gap-1">
          <span class="text-center">By continuing you agree with our</span>
          <button @click.prevent="openModal" class="text-center text-vivid-purple">
            terms and conditions.
          </button>
        </div>
      </div>
    </div>
  </CustomForm>
  <SharedModal v-model="open">
    <TermsConditions @close="closeModal" />
  </SharedModal>
</template>

<script lang="ts">
import SharedCheckBox from '@/components/reusable/SharedCheckBox.vue'
import YourInformation from '@/components/sign-up/YourInformation.vue'
import DeliverInformation from '@/components/sign-up/DeliverInformation.vue'
import GiftInformation from '@/components/sign-up/GiftInformation.vue'
import PaymentInformation from '@/components/sign-up/PaymentInformation.vue'
import { defineComponent, ref } from 'vue'
import { usePlansStore } from '@/stores/plans'
import { Form as CustomForm } from 'vee-validate'
import SharedModal from '@/components/reusable/SharedModal.vue'
import TermsConditions from '@/components/sign-up/TermsConditions.vue'
import { useRouter } from 'vue-router'
import { emailValidation } from '@/utills/helpers/validation'

export default defineComponent({
  components: {
    SharedCheckBox,
    YourInformation,
    DeliverInformation,
    CustomForm,
    GiftInformation,
    PaymentInformation,
    SharedModal,
    TermsConditions
  },
  data() {
    return {
      paymentInfo: [
        {
          placeholder: 'Expiration Date',
          field: 'expDate'
        },
        {
          placeholder: 'CVV',
          field: 'cvv'
        },
        {
          placeholder: 'Billing ZIP Code',
          field: 'billing'
        }
      ],
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
    const router = useRouter()
    let zipCode = ref('')
    const { publication } = usePlansStore()
    let choosePlan = ref(1)
    let validZips = ['00000']
    let renewYear = ref(false)

    function required(value: string) {
      return value ? true : 'This field is required'
    }

    function zipValidation(value: string) {
      return value === '00000' ? true : 'Please enter a valid ZIP code'
    }

    function onSubmit() {
      router.push('/order-confirmation')
    }

    const updateChoosePlan = (planId: number) => {
      choosePlan.value = planId
    }
    const open = ref(false)
    const openModal = () => {
      open.value = true
    }
    const closeModal = () => {
      open.value = false
    }
    return {
      validZips,
      publication,
      choosePlan,
      updateChoosePlan,
      renewYear,
      required,
      onSubmit,
      zipValidation,
      emailValidation,
      zipCode,
      open,
      openModal,
      closeModal
    }
  }
})
</script>
