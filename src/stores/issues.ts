import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIssuesStore = defineStore('issues', () => {
  const lastIssues = ref([
    {
      id: 6,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_3.png'
    },
    {
      id: 7,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_2.png'
    },
    {
      id: 8,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_3.png'
    },
    {
      id: 9,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_2.png'
    }
  ])
  return { lastIssues }
})
