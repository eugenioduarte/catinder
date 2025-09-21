import axios from 'axios'
import { CatBreed, VotePayload } from './cat.types'

const CAT_API_URL = 'https://api.thecatapi.com/v1'

export const fetchCatBreedsAPI = async (): Promise<CatBreed[]> => {
  const response = await axios.get<CatBreed[]>(`${CAT_API_URL}/breeds`, {
    headers: {
      'x-api-key': process.env.CATS_API_KEY,
    },
  })
  return response.data
}

export const voteCatAPI = async (payload: VotePayload) => {
  const response = await axios.post(`${CAT_API_URL}/votes`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.CATS_API_KEY,
    },
  })
  return response.data
}
