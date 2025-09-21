import { useMutation, useQuery } from '@tanstack/react-query'
import { VotePayload } from '../services/cat.types'
import { fetchCatBreedsAPI, voteCatAPI } from '../services/catApi'

export const useGetCatBreeds = () => {
  return useQuery({
    queryKey: ['cat-breeds'],
    queryFn: fetchCatBreedsAPI,
    staleTime: 5 * 60 * 1000,
  })
}

export const useVoteForCat = () => {
  return useMutation({
    mutationFn: (payload: VotePayload) => voteCatAPI(payload),
  })
}
