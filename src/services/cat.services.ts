import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

const CAT_API_URL = 'https://api.thecatapi.com/v1'

export const useGetCatBreeds = () => {
  return useQuery({
    queryKey: ['cat-breeds'],
    queryFn: async () => {
      const { data } = await axios.get(`${CAT_API_URL}/breeds`)
      return data
    },
    staleTime: 5 * 60 * 1000,
  })
}

type VotePayload = {
  image_id: string
  value: 1 | 0
  sub_id?: string
}

export const useVoteForCat = () => {
  return useMutation({
    mutationFn: async (payload: VotePayload) => {
      const { data } = await axios.post(`${CAT_API_URL}/votes`, payload, {
        headers: {
          'x-api-key': 'KEY',
        },
      })
      return data
    },
  })
}
