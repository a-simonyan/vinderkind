<template>
  <div
    class="flex flex-col max-w-[524px] m-auto w-full pt-[31px] sm:pt-[66px] pb-[66px] px-5 sm:px-0 lg:pt-[167px]"
  >
    <a href="/sign-in" class="text-vivid-purple text-xl pb-2.5">‹ Back</a>
    <h5 class="text-[27px] sm:text-3xl/[35px] font-bold font-raleway mb-[19px]">
      Enter your One-time code.
    </h5>
    <CustomForm @submit="onSubmit" class="w-full">
      <span class="text-lg/[21px] text-charcoal font-raleway pb-3">
        Enter your one time code that was sent to:
        <span class="text-pinkish-purple">{{ contact }}</span>
      </span>
      <div class="flex justify-between mt-1.5 code-wrap">
        <input type="text" maxlength="1" pattern="\d*" class="border-bottom" />
        <input type="text" maxlength="1" pattern="\d*" class="border-bottom" />
        <input type="text" maxlength="1" pattern="\d*" class="border-bottom" />
        <input type="text" maxlength="1" pattern="\d*" class="border-bottom" />
        <input type="text" maxlength="1" pattern="\d*" class="border-bottom" />
        <input type="text" maxlength="1" pattern="\d*" class="border-bottom" />
      </div>

      <!-- <span class="text-xs text-red-500">{{ errors.contact }}</span> -->

      <button
        class="mt-5 bg-vivid-purple w-full py-4 text-[21px]/[25px] text-white rounded-small font-bold hover:opacity-90 transition-all ease-in duration-150"
      >
        Continue
      </button>
      <div class="text-center">
        <button
          @click="sendNewCode"
          class="text-vivid-purple text-lg font-semibold mt-2.5 hover:opacity-75"
        >
          Send new code
        </button>
      </div>
    </CustomForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Form as CustomForm } from 'vee-validate'
import { signInStore } from '@/stores/sign-in'

export default defineComponent({
  setup() {
    const signIn = signInStore()
    const contact = signIn.contact

    const sendNewCode = async () => {
      await signIn.submitContact(contact)
    }
    const onSubmit = () => {
      console.log('test')
    }

    return {
      contact,
      sendNewCode,
      onSubmit
    }
  }
})
</script>

<style>
.code-wrap input {
  background: transparent;
  border-style: none;
  width: 8.33%;
  border-radius: 0;
  border-bottom: 1.5px solid #6d8791;
  font-size: 30px;
  padding: 8px 10px;
}
.code-wrap input:focus-visible {
  outline: none;
}
</style>
