import { defineStore } from 'pinia'
import { fetchData } from '@/api/query'
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
const $toast = useToast()
export const useUpdateStore = defineStore('update', {
  actions: {
    async getUpdates(values: { [key: string]: string }) {
      const response: any = await fetchData('email-updates', 'post', {
        emailAddress: values.email,
        fullName: values.name
      })
      if (!response.err) {
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
    }
  }
})
