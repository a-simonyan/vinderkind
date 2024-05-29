import { defineStore } from 'pinia'

export const usePlansStore = defineStore('plans', () => {
  const plans = [
    { id: 2, name: "חודש'ליך", savings: null, price: 19.99, preIssue: null },
    { id: 1, name: 'יערליך', savings: '17%', price: 199.99, preIssue: 16.66 }
  ]
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
  return { plans, publication }
})
