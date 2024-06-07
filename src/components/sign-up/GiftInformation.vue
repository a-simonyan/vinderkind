<template>
  <div class="pt-[27px] border-t border-t-light-gray flex items-center">
    <SharedCheckBox v-model="checked" />
    <IconGift />
    <span class="pl-3">It’s a Gift</span>
  </div>
  <div v-if="checked" class="flex flex-col gap-[17px] mt-4">
    <div class="w-full relative">
      <CustomField
        :name="'recipients' + '-' + index"
        :rules="required"
        placeholder="Recipients Name "
      />
      <span class="text-red-500 text-xs pt-1 absolute bottom-[-18px] left-0">{{
        errors['recipients' + '-' + index]
      }}</span>
    </div>
    <div class="flex flex-col relative">
      <Field
        as="textarea"
        :name="'giftNote' + '-' + index"
        :rules="required"
        placeholder="Gift note"
        cols="30"
        rows="5"
        class="border border-charcoal rounded-small w-full text-xl placeholder:text-silver px-[21px] pt-4 pb-[13px]"
      />
      <span class="text-red-500 text-xs pt-1 absolute bottom-[-18px]">{{
        errors['giftNote' + '-' + index]
      }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Field } from 'vee-validate'
import SharedCheckBox from '@/components/reusable/SharedCheckBox.vue'
import CustomField from '@/components/reusable/CustomField.vue'
import { required } from '@/utills/helpers/validation'
import IconGift from '@/components/icons/IconGift.vue'
export default defineComponent({
  components: { Field, SharedCheckBox, CustomField, IconGift },
  props: {
    errors: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup() {
    return {
      required,
      checked: ref(false)
    }
  }
})
</script>
