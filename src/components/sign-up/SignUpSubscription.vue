<template>
  <CustomForm v-slot="{ errors }" @submit="onSubmit" class="w-full lg:w-1/2">
    <div
      class="w-full pt-10 sm:pt-[46px] sm:pb-10 px-[23px] sm:pr-[54px] rounded-small bg-white lg:rounded-none -mt-1 lg:mt-0"
    >
      <h5 class="text-xl/[27px] sm:text-[22px]/[26px] font-bold sm:font-semibold">
        Sign up for a Vinderkind Subscription
      </h5>
      <div v-for="(item, index) in subscription" :key="index" class="">
        <SubscriptionSection
          :errors="errors"
          :addSubscripbtion="addSubscripbtion"
          :subscribtion="item"
          :index="index"
          :allsubscription="subscription"
          @enableSection="enableSection"
        />
      </div>
      <div :class="isEnabled ? 'opacity-100' : 'opacity-50 pointer-events-none'">
        <AccesoriesInformation />
        <PaymentInformation :errors="errors" :paymentInfo="paymentInfo" />
        <button
          class="mt-[15px] mb-[18px] bg-vivid-purple w-full py-4 text-[21px]/[25px] text-white rounded-small font-bold hover:opacity-90 transition-all ease-in duration-150"
        >
          Subscribe & Pay ${{ calculateTotalAmount(totalPayment) }}
        </button>
        <div class="text-[13px]/[17px] flex flex-col">
          <span class="text-center">By clicking on the subscribe button, you agree with our </span>
          <button @click.prevent="openModal" class="text-center text-vivid-purple">
            terms and conditions & cancelation policy.
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
import PaymentInformation from '@/components/sign-up/PaymentInformation.vue'
import AccesoriesInformation from '@/components/sign-up/AccesoriesInformation.vue'
import { defineComponent, ref } from 'vue'
import SubscriptionSection from '@/components/sign-up/SubscriptionSection.vue'
import { usePlansStore } from '@/stores/plans'
import { Form as CustomForm } from 'vee-validate'
import SharedModal from '@/components/reusable/SharedModal.vue'
import TermsConditions from '@/components/sign-up/TermsConditions.vue'
import { useOrderStore } from '@/stores/sign-up'
import { transformData } from '@/utills/helpers/validation'
import { useTotalPaymentStore } from '@/stores/totalPayment'
export default defineComponent({
  components: {
    PaymentInformation,
    AccesoriesInformation,
    CustomForm,
    SubscriptionSection,
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
      isEnabled: false
    }
  },
  methods: {
    updateSubscriptionZipCode(index: number, value: string) {
      this.subscription[index].zipCode = value
    },
    enableSection(value: boolean) {
      this.isEnabled = value
    }
  },

  setup() {
    const { calculateTotalAmount, totalPayment } = useTotalPaymentStore()
    const open = ref(false)
    const openModal = () => {
      open.value = true
    }
    const closeModal = () => {
      open.value = false
    }
    const { publication } = usePlansStore()
    let subscription = ref([{ zipCode: '' }])
    function addSubscripbtion() {
      subscription.value.push({ zipCode: '' })
    }

    const signUp = useOrderStore()
    async function onSubmit(values: Object) {
      const cloneProducts = totalPayment.products
      const products = cloneProducts.map((item) => {
        return {
          id: item.id,
          quantity: 1
        }
      })
      await signUp.submitOrder({ ...transformData(values), products })
    }

    return {
      subscription,
      publication,
      onSubmit,
      addSubscripbtion,
      open,
      openModal,
      closeModal,
      calculateTotalAmount,
      totalPayment
    }
  }
})
</script>
