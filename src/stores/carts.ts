import { defineStore, type StoreDefinition } from 'pinia'
import { ref } from 'vue'
interface CartItem {
  id: number
  count: number
  price: number
  name: string
  info: string
  img: string
}

export const useCartsStore: StoreDefinition<string> = defineStore('carts', () => {
  const carts = ref<CartItem[]>([])

  const updateCount = (cartId: number, increment = true) => {
    const cart = carts.value.find((cart) => cart.id === cartId)
    if (cart) {
      if (increment) {
        cart.count++
      } else {
        if (cart.count > 1) {
          cart.count--
        } else {
          removeCart(cartId)
          cart.count = 0
        }
      }
    }
  }

  const addCart = (cart: CartItem, increment = true) => {
    const existingCart = carts.value.find((c) => c.id === cart.id)
    if (increment) {
      if (existingCart) {
        updateCount(cart.id)
      } else {
        carts.value.push(cart)
        updateCount(cart.id)
      }
    } else {
      updateCount(cart.id, false)
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

  return { carts, updateCount, removeCart, calculateTotal, addCart }
})
