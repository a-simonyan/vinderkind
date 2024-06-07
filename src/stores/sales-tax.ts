import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSalesTaxStore = defineStore('salesTax', () => {
  const shipping = ref(3.99)
  const tax = ref(3.99)

  return { shipping, tax }
})
