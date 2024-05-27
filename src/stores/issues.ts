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
  const allIssues = ref([
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
    },
    {
      id: 10,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_3.png'
    },
    {
      id: 11,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_2.png'
    },
    {
      id: 12,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_3.png'
    },
    {
      id: 13,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_2.png'
    },
    {
      id: 14,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_3.png'
    },
    {
      id: 15,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_3.png'
    },
    {
      id: 16,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_3.png'
    },
    {
      id: 17,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_2.png'
    },
    {
      id: 18,
      price: '19.99',
      name: 'שבט תשפ״ד',
      info: 'טעקע 6',
      count: 0,
      img: '/images/carts/cart_image_3.png'
    }
  ])
  return { lastIssues, allIssues }
})
