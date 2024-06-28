import type { IProduct, ITotal, IZip } from '@/utills/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTotalPaymentStore = defineStore('totalPayment', () => {
  const totalPayment = ref({
    zips: [],
    products: []
  } as ITotal)

  const handleZipsPayment = (selectedZip: IZip) => {
    totalPayment.value.zips.push(selectedZip)
  }

  const deleteZip = (id: number) => {
    totalPayment.value.zips = totalPayment.value.zips.filter((it, idx) => idx !== id)
  }
  const handleAddAccesories = (product: IProduct) => {
    const index = totalPayment.value.products.findIndex((p: IProduct) => p.id === product.id)
    if (index !== -1) {
      totalPayment.value.products.splice(index, 1)
    } else {
      totalPayment.value.products.push(product)
    }
  }
  const calculateZip = () => {
    return totalPayment.value.zips.reduce((acc, zip) => acc + Number(zip.amount), 0)
  }
  const calculateProduct = () => {
    return totalPayment.value.products.reduce((acc, product) => acc + product.price, 0)
  }
  const calculateTotalAmount = (data: ITotal) => {
    let total = 0

    total += data.zips.reduce((acc, zip) => acc + Number(zip.amount), 0)

    total += data.products.reduce((acc, product) => acc + product.price, 0)

    return total
  }
  return {
    totalPayment,
    handleZipsPayment,
    deleteZip,
    handleAddAccesories,
    calculateTotalAmount,
    calculateZip,
    calculateProduct
  }
})
