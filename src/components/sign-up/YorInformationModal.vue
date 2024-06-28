<template>
  <CustomForm v-slot="{ errors }" @submit="onSubmit">
    <div class="pt-9 pb-[45px] pl-[33px] pr-[48px] min-w-[80vw] sm:min-w-[605px] w-full">
      <h5 class="text-[19px]/[22px] sm:text-[27px]/[31px] font-semibold font-raleway mb-4">
        Your information
      </h5>
      <div class="flex flex-col gap-4">
        <div
          v-for="(field, index) in yourInfo"
          :key="index"
          class="w-full flex flex-col justify-center relative"
        >
          <CustomField
            :name="field.field"
            :rules="[required, field.valid]"
            :placeholder="field.placeholder"
          />
          <span></span>
          <span class="text-red-500 text-xs pt-1">{{ errors[field.field] }}</span>
        </div>
      </div>
      <div class="mt-6 mb-5">
        <SharedCheckBox label="Sign up for Dee Voch emails" />
      </div>
      <button
        class="flex justify-center bg-vivid-purple w-full py-4 text-[21px]/[25px] text-white rounded-small font-bold hover:opacity-90 transition-all ease-in duration-150"
      >
        Sign up for Vinderkind Updates
      </button>
    </div>
  </CustomForm>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Form as CustomForm } from 'vee-validate'
import { required } from '@/utills/helpers/validation'
import CustomField from '@/components/reusable/CustomField.vue'
import { emailValidation } from '@/utills/helpers/validation'
import SharedCheckBox from '@/components/reusable/SharedCheckBox.vue'
import { useUpdateStore } from '@/stores/use-updates'

export default defineComponent({
  components: { CustomForm, CustomField, SharedCheckBox },
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
      ]
    }
  },
  methods: {
    async onSubmit(values: { [key: string]: string }) {
      const updateStore = useUpdateStore()
      await updateStore.getUpdates(values)
    }
  },

  setup() {
    return {
      required,
      emailValidation
    }
  }
})
</script>
