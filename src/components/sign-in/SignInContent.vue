<template>
  <div
    class="flex flex-col max-w-[524px] m-auto w-full pt-[31px] sm:pt-[66px] pb-[66px] px-5 sm:px-0 lg:pt-[167px]"
  >
    <h5 class="text-[27px] sm:text-3xl/[35px] font-bold font-raleway mb-[19px]">
      Sign in with a One-time code.
    </h5>
    <CustomForm v-slot="{ errors }" @submit="onSubmit" class="w-full">
      <span class="text-lg/[21px] text-charcoal font-raleway pb-3">
        Enter your email address or phone number
      </span>
      <Field
        v-validate="'required|validateContact'"
        data-vv-as="contact information"
        name="contact"
        :rules="[required, validateContact] as RuleExpression<unknown>"
        v-model="contact"
        class="border-charcoal border rounded-small placeholder:text-silver text-xl h-[53px] px-[18px] w-full mt-[13px]"
        placeholder="Email address or phone number"
      />

      <span class="text-xs text-red-500">{{ errors.contact }}</span>

      <button
        class="mt-[18px] bg-vivid-purple w-full py-4 text-[21px]/[25px] text-white rounded-small font-bold hover:opacity-90 transition-all ease-in duration-150"
      >
        Get code
      </button>
    </CustomForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Field, Form as CustomForm, type RuleExpression } from 'vee-validate'
import { signInStore } from '@/stores/sign-in'

export default defineComponent({
  components: { Field, CustomForm },
  setup() {
    const contact = ref('')
    const contactStore = signInStore()

    function required(value: string) {
      return !!value || 'This field is required'
    }

    function validateContact(contact: string) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

      if (emailRegex.test(contact)) {
        return true
      } else if (phoneRegex.test(contact)) {
        return true
      } else {
        return 'Invalid contact information.'
      }
    }

    async function onSubmit(values: any) {
      await contactStore.submitContact(values.contact)
    }

    return {
      required,
      validateContact,
      onSubmit,
      contact
    }
  }
})
</script>
