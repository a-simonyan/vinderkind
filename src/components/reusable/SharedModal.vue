<template>
  <TransitionRoot :show="modelValue">
    <CustomDialog class="relative z-10" @close="handleCloseModal">
      <TransitionChild
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <template #default>
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </template>
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full justify-center text-center items-center lg:p-0"
          :class="customStyle ? 'p-0' : 'p-4'"
        >
          <TransitionChild
            :class="customStyle"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <template #default>
              <DialogPanel
                class="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full"
              >
                <div class="relative">
                  <slot></slot>
                  <button @click.prevent="handleCloseModal" class="absolute top-[22px] right-6">
                    <IconClose class="[&_path]:fill-black w-[18px] h-[18px]" />
                  </button>
                </div>
              </DialogPanel>
            </template>
          </TransitionChild>
        </div>
      </div>
    </CustomDialog>
  </TransitionRoot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  Dialog as CustomDialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import IconClose from '@/components/icons/IconClose.vue'

export default defineComponent({
  components: { CustomDialog, DialogPanel, TransitionChild, TransitionRoot, IconClose },

  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    customStyle: {
      type: String
    }
  },

  methods: {
    handleCloseModal() {
      this.$emit('update:modelValue', false)
    }
  }
})
</script>
