import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccessoriesStore = defineStore('accessories', () => {
  const accessories = ref([
    {
      id: 1,
      price: '10.99',
      name: 'Magazine Rack',
      count: 0,
      img: '/images/accessories/accessories-1.png'
    },
    {
      id: 2,
      price: '69.99',
      name: 'Headphone',
      count: 0,
      img: '/images/accessories/accessories-2.png'
    },
    {
      id: 3,
      price: '29.99',
      name: 'Vinderkind Speaker',
      count: 0,
      img: '/images/accessories/accessories-3.png'
    }
  ])
  return { accessories }
})
