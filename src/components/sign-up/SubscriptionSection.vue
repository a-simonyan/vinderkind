<template>
  <div>
    <div v-if="index >= 1" class="flex justify-between">
      <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold mt-[17px] mb-[13px]">
        Subscription #{{ index + 1 }}
      </h5>
      <button @click.prevent="removeSubscripion" class="text-lg font-bold text-vivid-purple">
        Remove
      </button>
    </div>
    <DeliveryZipCode
      :zipCode="subscribtion.zipCode"
      :errors="errors"
      @update:modelValue="updateZipCode"
      :index="index" 
      :checkZip="dataZip?.status"
      @updateZipCode="updateZipCode"
    />
    <span v-if="dataZip?.err" class="text-red-500 text-xs"
      >We currently don’t deliver to this zip code. Please check back in the coming months.</span
    >
    <div
      :class="dataZip?.status ? 'opacity-100' : 'opacity-50 pointer-events-none'"
      class="transition-all duration-300 ease-linear"
    >
      <SubscriptionPreferance
        :choosePlan="choosePlan"
        :publication="publication"
        :updateChoosePlan="updateChoosePlan"
        :dataZip="dataZip?.data"
      />
      <GiftInformation :errors="errors" :index="index" />
      <YourInformation :yourInfo="yourInfo" :errors="errors" />
      <div class="pt-6 pb-[31px] border-b border-b-light-gray">
        <SharedCheckBox label="Sign up for Vinderkind emails" />
      </div>
      <DeliverInformation :deliveryInfo="deliveryInfo" :errors="errors" />
      <button
        @click.prevent="addSubscripbtion"
        class="text-vivid-purple text-base sm:text-lg font-bold font-raleway flex items-center gap-[9.5px] mt-[17px]"
      >
        <IconPlus class="[&_path]:fill-vivid-purple" />Add Another Subscription
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue'
import DeliveryZipCode from '@/components/sign-up/DeliveryZipCode.vue'
import SubscriptionPreferance from '@/components/sign-up/SubscriptionPreferance.vue'
import GiftInformation from '@/components/sign-up/GiftInformation.vue'
import YourInformation from '@/components/sign-up/YourInformation.vue'
import DeliverInformation from '@/components/sign-up/DeliverInformation.vue'
import SharedCheckBox from '@/components/reusable/SharedCheckBox.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import { usePlansStore } from '@/stores/plans'
import { required } from '@/utills/helpers/validation'
import { emailValidation } from '@/utills/helpers/validation'
import { fetchData } from '@/api/query'
export default defineComponent({
  components: {
    DeliveryZipCode,
    SubscriptionPreferance,
    GiftInformation,
    YourInformation,
    SharedCheckBox,
    DeliverInformation,
    IconPlus
  },
  props: {
    errors: {
      type: Object,
      required: true
    },
    addSubscripbtion: {
      type: Function as PropType<(payload?: MouseEvent) => void>,
      required: true
    },
    subscribtion: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    allsubscription: {
      type: Object,
      required: true
    }
  },
  data(props) {
    return {
      yourInfo: [
        {
          placeholder: 'Full name',
          field: 'name' + '-' + props.index,
          valid: this.required
        },
        {
          placeholder: 'Email',
          field: 'email' + '-' + props.index,
          valid: this.emailValidation
        }
      ],
      deliveryInfo: [
        {
          placeholder: 'Address',
          field: 'address' + '-' + props.index
        },
        {
          placeholder: 'Address Line 2',
          field: 'address2' + '-' + props.index
        },
        {
          placeholder: 'City, State, ZIP',
          field: 'city' + '-' + props.index
        }
      ]
    }
  },
  methods: {
    updateZipCode(value: string) {
      this.$emit('update:subscribtion', value)
      if (value.length === 5) {
        fetchData(`zip/${value}`).then((res) => {
          this.dataZip = res
          this.$emit('enableSection', true)
        })
      } else {
        this.dataZip = []
        this.$emit('enableSection', false)
      }
    },
    removeSubscripion() {
      this.$props.allsubscription.splice(this.$props.index, 1)
    }
  },
  setup() {
    let dataZip = ref()
    let choosePlan = ref('0')
    const { publication } = usePlansStore()
    const updateChoosePlan = (planId: string) => {
      choosePlan.value = planId
    }

    return {
      choosePlan,
      publication,
      updateChoosePlan,
      emailValidation,
      required,
      dataZip
    }
  }
})
</script>
