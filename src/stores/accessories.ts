import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccessoriesStore = defineStore('accessories', () => {
  const lastAccessories = ref([
    {
      id: 111,
      price: '10.99',
      name: 'Magazine Rack',
      count: 0,
      img: '/images/accessories/accessories-1.png'
    },
    {
      id: 22525,
      price: '69.99',
      name: 'Headphone',
      count: 0,
      img: '/images/accessories/accessories-2.png'
    },
    {
      id: 38758757,
      price: '29.99',
      name: 'Vinderkind Speaker',
      count: 0,
      img: '/images/accessories/accessories-3.png'
    }
  ])
  const accessories = ref([
    {
      id: 111,
      price: '10.99',
      name: 'Magazine Rack',
      count: 0,
      img: '/images/accessories/accessories-1.png'
    },
    {
      id: 22525,
      price: '69.99',
      name: 'Headphone',
      count: 0,
      img: '/images/accessories/accessories-2.png'
    },
    {
      id: 38758757,
      price: '29.99',
      name: 'Vinderkind Speaker',
      count: 0,
      img: '/images/accessories/accessories-3.png'
    },
    {
      id: 49696,
      price: '10.99',
      name: 'Magazine Rack',
      count: 0,
      img: '/images/accessories/accessories-1.png'
    },
    {
      id: 59866,
      price: '69.99',
      name: 'Headphone',
      count: 0,
      img: '/images/accessories/accessories-2.png'
    },
    {
      id: 69795,
      price: '29.99',
      name: 'Vinderkind Speaker',
      count: 0,
      img: '/images/accessories/accessories-3.png'
    },
    {
      id: 74752582,
      price: '10.99',
      name: 'Magazine Rack',
      count: 0,
      img: '/images/accessories/accessories-1.png'
    },
    {
      id: 76869963,
      price: '69.99',
      name: 'Headphone',
      count: 0,
      img: '/images/accessories/accessories-2.png'
    },
    {
      id: 63833,
      price: '29.99',
      name: 'Vinderkind Speaker',
      count: 0,
      img: '/images/accessories/accessories-3.png'
    }
  ])
  return { accessories, lastAccessories }
})
