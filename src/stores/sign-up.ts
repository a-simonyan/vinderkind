import { defineStore } from 'pinia'
import { fetchData } from '@/api/query'
import router from '@/router'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

const $toast = useToast()
interface GiftInformation {
  name: string
  gift_note: string
}

interface Address {
  name: string
  address_line_1: string
  address_line_2: string
  city: string
  state: string
  zip: string
}

interface Subscription {
  cycle: 'yearly' | 'monthly'
  startMonth: number
  gift: boolean
  gift_information?: GiftInformation
  address: Address
}

interface OrderState {
  subscriptions: Subscription[]
  covers: { image: string; name: string }[]
}

export const useOrderStore = defineStore('order', {
  state: (): OrderState => ({
    subscriptions: [],
    covers: []
  }),
  actions: {
    async submitOrder(values: Object) {
      const response: any = await fetchData('orders', 'post', {
        order: values
      })
      if (!response.err) {
        router.push('/subscription-confirmation')
        $toast.open({
          message: 'Success!',
          type: 'success',
          position: 'top-right'
        })
      } else {
        $toast.open({
          message: 'Something went wrong!',
          type: 'error',
          position: 'top-right'
        })
      }
    },
    async fetchCovers() {
      try {
        const response: any = await fetchData('getCoverImages', 'get', null, true)
        this.covers = response?.data // Use 'this.covers' to update state
      } catch (error) {
        console.error('Error fetching covers:', error)
      }
    }
  }
})
