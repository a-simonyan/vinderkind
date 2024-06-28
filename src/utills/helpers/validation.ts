export function required(value: unknown): boolean | string {
  return value ? true : 'This field is required'
}
export function emailValidation(value: string) {
  const emailRegex = /\S+@\S+\.\S+/
  return emailRegex.test(value) ? true : 'Invalid email format'
}
export const cvvValidation = (value: string) => {
  const regex = /^\d{3}$/
  return regex.test(value) ? true : 'Invalid cvv'
}
export function transformData(values: any) {
  const {
    'name-0': name,
    'email-0': email,
    phone,
    signup,
    cartName: cartName,
    cardNumber,
    expDate: exp,
    cvv,
    billing: zipCode
  } = values

  const customer = {
    name,
    email,
    phone,
    signUp: signup
  }

  const paymentInfo = {
    name: cartName,
    cardNumber: cardNumber,
    exp,
    cvv,
    zip: zipCode
  }

  const subscriptions = []

  for (let i = 0; i <= 2; i++) {
    const planKey = `plan-${i}`
    const zipKey = `zip-${i}`
    const addressNameKey = `address_line_1-${i}`
    const addressLineKey = `address_line_2-${i}`
    const cityKey = `city-${i}`
    const giftName = `recipients-${i}`
    const giftNote = `giftNote-${i}`
    if (values[planKey]) {
      subscriptions.push({
        cycle: values[planKey],
        startMonth: 7,
        gift: values[giftName] ? true : false,
        gift_information: {
          name: values[giftName],
          gift_note: values[giftNote]
        },
        address: {
          name: values[addressNameKey],
          address_line_1: values[addressNameKey],
          address_line_2: values[addressLineKey],
          city: values[cityKey],
          state: values[cityKey],
          zip: values[zipKey]
        }
      })
    }
  }

  const output = {
    customer,
    paymentInfo,
    subscriptions
  }

  return output
}
