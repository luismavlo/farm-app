import axios from 'axios'

const cafeApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export default cafeApi
