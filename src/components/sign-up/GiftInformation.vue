<template>
  <div class="pt-[27px] border-t border-t-light-gray">
    <SharedCheckBox v-model="checked" label="It’s a Gift" />
  </div>
  <div v-if="checked" class="flex flex-col gap-[17px] mt-4">
    <div class="w-full relative">
      <Field
        :name="'recipients' + '-' + index"
        :rules="required"
        placeholder="Recipients Name "
        class="w-full border border-charcoal rounded-small px-[21px] pt-4 pb-[13px] text-xl placeholder:text-silver h-[53px] focus:border-vivid-purple"
      />
      <span class="text-red-500 text-xs pt-1 absolute bottom-[-18px] left-0">{{
        errors.recipients
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
      <span class="text-red-500 text-xs pt-1 absolute bottom-[-18px]">{{ errors.giftNote }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Field } from 'vee-validate'
import SharedCheckBox from '@/components/reusable/SharedCheckBox.vue'
export default defineComponent({
  components: { Field, SharedCheckBox },
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
    function required(value: unknown): boolean | string {
      return value ? true : 'This field is required'
    }

    return {
      required,
      checked: ref(false)
    }
  }
})
</script>
