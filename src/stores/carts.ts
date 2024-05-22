import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartsStore = defineStore('carts', () => {
  const carts = ref([
    { id: 0, name: 'כסלו תשפ״ד', info: 'טעקע 4', price: 19.99, count: 1 },
    { id: 1, name: 'Vinderkind Speaker', info: '', price: 29.99, count: 1 }
  ])

  const updateCount = (cartId: number, increment = true) => {
    const cart = carts.value.find((cart) => cart.id === cartId)
    if (cart) {
      if (increment) {
        cart.count++
      } else {
        if (cart.count > 1) {
          cart.count--
        }
      }
    }
  }

  const removeCart = (cartId: number) => {
    const index = carts.value.findIndex((cart) => cart.id === cartId)
    if (index !== -1) {
      carts.value.splice(index, 1)
    }
  }

  const calculateTotal = () => {
    let total = 0
    carts.value.forEach((cart) => {
      total += cart.count * cart.price
    })
    return total
  }

  return { carts, updateCount, removeCart, calculateTotal }
})
