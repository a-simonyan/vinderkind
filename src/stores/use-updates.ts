import { defineStore } from 'pinia';
import { fetchData } from '@/api/query';

export const useUpdateStore = defineStore('update', {
  actions: {
    async getUpdates(values: { [key: string]: string }) {
        try {
            const response:any = await fetchData('email-updates', 'post', {
              name: values.name,
              email: values.email
            });
            console.log('Response:', response.data);
          } catch (error) {
            console.error('Error:', error);
        }
    }
  }
});
