<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">{{
      label
    }}</ListboxLabel>
    <div class="relative mt-2">
      <ListboxButton
        class="border border-black relative w-full cursor-default rounded-small bg-white py-3 pl-[18px] pr-10 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-vivid-purple text-xl text-left"
      >
        <span class="block truncate text-lg">{{ selected.label }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[25px]">
          <img
            src="../../assets/images/arrow_down.png"
            alt="arrow"
            class="w-[13px] h-2"
            draggable="false"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="item in data"
            :key="item.id"
            :value="item"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'bg-vivid-purple text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-3 pr-9'
              ]"
            >
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{
                item.label
              }}</span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions
} from '@headlessui/vue'

interface ListItem {
  id: number
  label: string
}

export default defineComponent({
  components: { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions },
  props: {
    label: {
      type: String
    },
    data: {
      type: Array as () => ListItem[],
      required: true
    }
  },
  setup(props) {
    const selected = ref<ListItem>(props.data[0])
    return {
      selected
    }
  }
})
</script>
