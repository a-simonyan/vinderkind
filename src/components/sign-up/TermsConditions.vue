<template>
  <div class="max-w-[797px] w-full py-9 pl-10 pr-[45px]">
    <h5 class="text-xl sm:text-[27px]/[31px] font-semibold font-raleway pb-[35px]">
      Terms and Conditions & Cancelation Policy
    </h5>
    <p class="text-base sm:text-[17px]/[21px]">
      When signing up to a subscription plan the full amount of the subscription package will be
      charged.<br /><br />
      If a subscription delivery is missed, please contact our office and we will extend the
      subscription for an additional month.<br /><br />
      To cancel a subscription please call our office. Cancellations cannot be done online.<br /><br />
      New subscribers will be enrolled in auto renewal, which will automatically renew the
      subscription at the end of the term.<br /><br />
      All new subscribers must agree to all terms and conditions.
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {},
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
})
</script>
