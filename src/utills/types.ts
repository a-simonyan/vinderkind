export interface IZip {
  id?: number
  name?: string
  type?: string
  amount?: number | string
  save?: string
  perIssue?: number
}

export interface IProduct {
  id?: number
  name?: string
  description?: null
  price: number
  img?: string
  pdf?: string
  mp3?: string
  count?: number
}

export interface ITotal {
  zips: IZip[]
  products: IProduct[]
}
