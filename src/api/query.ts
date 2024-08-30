import axios from 'axios'

const API_URL = 'https://staging.vinderkind.com/api/'
const API_URL_DEEVOCH = 'https://www.deevoch.com/api/'
export const fetchData = async (
  path: string,
  method = 'get',
  body: object | null = null,
  api = false
) => {
  const url = `${api ? API_URL_DEEVOCH : API_URL}${path}`

  try {
    let response
    if (method.toLowerCase() === 'get') {
      response = await axios.get(url)
    } else if (method.toLowerCase() === 'post') {
      response = await axios.post(url, body)
    }
    return response
  } catch (error) {
    return {
      err: 'Request failed'
    }
  }
}
