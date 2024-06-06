import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import axios from 'axios';

export const useAccessoriesStore = defineStore('accessories', () => {
  const lastAccessories = ref([]);
  const accessories = ref([]);

  const fetchAccessories = async () => {
    try {
      const response = await axios.get('https://staging.vinderkind.com/api/products');
      accessories.value = response.data.data;
    } catch (error) {
      console.error('Error fetching accessories:', error);
    }
  };

  const fetchLastAccessories = async () => {
    try {
      const response = await axios.get('https://staging.vinderkind.com/api/products/latest');
      lastAccessories.value = response.data; 
    } catch (error) {
      console.error('Error fetching last accessories:', error);
    }
  };

  return { accessories, lastAccessories, fetchAccessories, fetchLastAccessories };
});

