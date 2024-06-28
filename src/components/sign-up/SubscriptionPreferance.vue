<template>
  <div>
    <h5 class="text-xl/[27px] sm:text-[22px]/[26px] font-bold sm:font-semibold mt-[31px] sm:mt-6">
      Subscription Preference
    </h5>
    <div
      :class="dataZip ? 'opacity-100 h-max' : 'opacity-0 h-0 !p-4 !m-0'"
      class="border rounded-small shadow-gray transition-all duration-300 ease-in border-black pb-[23px] sm:pb-[29px] pt-10 relative mt-10 sm:mt-[49px] mb-5"
    >
      <div class="flex w-full absolute -top-6 justify-center">
        <div
          v-if="dataZip"
          class="max-w-[282px] sm:max-w-[308px] w-full bg-vivid-purple rounded-[32px] px-[9px] py-[6px] flex flex-row-reverse"
        >
          <button
            v-for="(plan, idx) in dataZip"
            :key="idx"
            class="w-full flex justify-center items-center gap-2 py-[6px] transition-all ease-linear duration-200 relative"
            :class="choosePlan == idx ? 'bg-white text-black rounded-[32px]' : 'text-white'"
          >
            <Field
              :name="'plan' + '-' + index"
              type="radio"
              v-model="selectedSubscriptionType"
              :value="plan.type"
              class="w-full h-full absolute opacity-0"
              @click="updateChoosePlan(idx, plan)"
            />
            <span v-if="plan?.save" class="text-xs/[14px] font-bold">Save {{ plan?.save }}</span>
            <span class="text-[19px]/[24px] font-hebrew font-bold">{{ plan?.name }}</span>
          </button>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex items-center gap-1">
          <span class="text-[21px] font-semibold font-reforma">טעקע</span>
          <span class="text-3xl font-bold"
            >${{ dataZip ? dataZip[choosePlan]?.perIssue : 0.0 }}</span
          >
        </div>
        <span class="text-[17px] font-hebrew"
          >באצאלט יערליך ${{ dataZip ? dataZip[choosePlan]?.amount : 0.0 }}</span
        >
      </div>
    </div>
    <SharedCheckBox label="Auto Renew Yearly" />
    <div class="mt-[27px] sm:mt-[29px]">
      <SharedSelect
        label="Choose your first publication on this subscription"
        :data="publication"
      />
    </div>
    <button
      @click.prevent="toggleDivVisibility"
      class="mb-[22px] font-raleway flex gap-3 items-center pl-[17px] pr-[54px] mt-[25px] sm:mt-[28px] cursor-pointer py-2 w-max bg-lavender rounded-[18px] text-vivid-purple relative"
    >
      <IconBasket class="[&_path]:stroke-vivid-purple w-4 h-4" />
      <span class="text-[13px] sm:text-base">Order Previous Publications</span>
      <img
        src="../../assets/images/purple-arrow.png"
        alt="arrow"
        class="absolute w-[13px] h-2 right-5 transition-all duration-200 ease-linear"
        :class="!isDivVisible ? 'rotete-180' : '-rotate-180'"
        draggable="false"
      />
    </button>
    <div
      v-if="isDivVisible"
      class="rounded-small border border-black pt-[26px] pb-[23px] px-[21px] flex flex-col gap-4 mt-[21px] mb-[27px]"
    >
      <div v-for="(item, index) in publication" :key="index" class="">
        <SharedCheckBox :label="item.label" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import SharedCheckBox from '@/components/reusable/SharedCheckBox.vue'
import { Field } from 'vee-validate'
export default defineComponent({
  components: { SharedCheckBox, Field },
  props: {
    publication: {
      type: Object,
      required: true
    },
    choosePlan: {
      type: String,
      required: true
    },
    updateChoosePlan: {
      type: Function,
      required: true
    },
    dataZip: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup() {
    const isDivVisible = ref(false)
    const selectedSubscriptionType = ref('yearly')

    function toggleDivVisibility() {
      isDivVisible.value = !isDivVisible.value
    }
    return {
      isDivVisible,
      selectedSubscriptionType,
      toggleDivVisibility
    }
  }
})
</script>
