export function required(value: unknown): boolean | string {
  return value ? true : 'This field is required'
}
export function emailValidation(value: string) {
  const emailRegex = /\S+@\S+\.\S+/
  return emailRegex.test(value) ? true : 'Invalid email format'
}
