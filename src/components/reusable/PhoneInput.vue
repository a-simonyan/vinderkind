<template>
  <vue-tel-input
    v-model="vueTel.phone"
    v-bind="vueTel.props"
    class="h-[55px] !border-charcoal !rounded-small focus-within:!shadow-none"
  ></vue-tel-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'
export default defineComponent({
  components: {
    VueTelInput
  },
  props: {
    phone: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      vueTel: {
        phone: this.phone,
        props: {
          preferredCountries: ['US', 'GB'],
          placeholder: 'Enter your phone',
          mode: 'international',
          inputOptions: {
            showDialCode: true
          },
          disabledFormatting: false,
          wrapperClasses: 'country-phone-input'
        }
      }
    }
  }
})
</script>
