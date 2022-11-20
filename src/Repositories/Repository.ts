import axios from 'axios'

const URL = import.meta.env.VITE_API_URL
const PORT = import.meta.env.VITE_API_PORT
const VERSION = import.meta.env.VITE_API_VERSION

export const create = () => {
  const token = localStorage.getItem('token')

  if (token) {
    return axios.create({
      baseURL: `${URL}:${PORT}/${VERSION}/`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
  }

  return axios.create({
    baseURL: `${URL}:${PORT}/${VERSION}/`,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
