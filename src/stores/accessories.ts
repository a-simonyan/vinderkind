import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchData } from '@/api/query';

export const useAccessoriesStore = defineStore('accessories', () => {
  const lastAccessories = ref([]);
  const accessories = ref([]);

  const fetchAccessories = async () => {
    try {
      const response:any = await fetchData('products', 'get');
      accessories.value = response?.data.data;
    } catch (error) {
      console.error('Error fetching accessories:', error);
    }
  };

  const fetchLastAccessories = async () => {
    try {
      const response:any = await fetchData('products/latest', 'get');
      lastAccessories.value = response?.data; 
    } catch (error) {
      console.error('Error fetching last accessories:', error);
    }
  };

  return { accessories, lastAccessories, fetchAccessories, fetchLastAccessories };
});

