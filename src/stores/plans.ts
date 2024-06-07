import { defineStore } from 'pinia'

export const usePlansStore = defineStore('plans', () => {
  const publication = [
    {
      id: 0,
      label: 'חודש אדר א׳ תשפ״ד טעקע 7'
    },
    {
      id: 1,
      label: 'חודש אדר א׳ תשפ״ד טעקע 7'
    },
    {
      id: 2,
      label: 'חודש אדר א׳ תשפ״ד טעקע 7'
    }
  ]
  return { publication }
})
