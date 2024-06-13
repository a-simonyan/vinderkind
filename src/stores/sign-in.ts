import { defineStore } from 'pinia';
import { fetchData } from '@/api/query';
import router from '@/router'; 

export const signInStore = defineStore('contact', {
  state: () => ({
    contact: '',
  }),
  actions: {
    async submitContact(contact:string) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

      if (emailRegex.test(contact)) {
        const body = {
            type: 'email',
            typeText: 'email address',
            value: contact
        };
        await fetchData('get-code', 'post', body);
      } else if (phoneRegex.test(contact)) {
        const body = {
            type: 'phone',
            typeText: 'phone number',
            value: contact
        };
        await fetchData('get-code', 'post', body);
      }

      this.contact = contact;
      router.push({ name: 'GetCode' }); 
    },
  },
});