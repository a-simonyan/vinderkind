<template>
  <div class="pl-[33px] pr-12 pt-9 pb-[53px] w-[80vw] sm:w-[605px]">
    <span class="text-[27px] font-semibold font-raleway mb-[13px] block"
      >Update Shipping ZIP code</span
    >
    <CustomInput
      placeholder="ZIP Code"
      type="number"
      v-model="zipCode"
      :error="error"
      required
      value="zipCode"
    />
    <button
      @click="updateInformation"
      class="bg-vivid-purple w-full py-[14px] mt-[18px] text-[21px]/[25px] text-white rounded-small font-bold hover:opacity-90 transition-all ease-in duration-150"
    >
      Update Information
    </button>
  </div>
</template>

<script lang="ts">
import CustomInput from '@/components/reusable/CustomInput.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { CustomInput },
  data() {
    return {
      zipCode: '',
      error: false as string | boolean
    }
  },
  methods: {
    updateInformation() {
      if (!this.zipCode) {
        this.error = 'Zip code is required'
      } else {
        this.error = false
        this.$emit('close')
      }
    }
  }
})
</script>
