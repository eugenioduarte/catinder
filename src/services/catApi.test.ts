import axios from 'axios'
import { CatBreed, VotePayload } from './cat.types'
import { fetchCatBreedsAPI, voteCatAPI } from './catApi'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('catApi', () => {
  beforeAll(() => {
    process.env.CATS_API_KEY = 'test-api-key'
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('fetchCatBreedsAPI', () => {
    it('should fetch cat breeds and return data', async () => {
      const mockData: CatBreed[] = [
        { id: 'abys', name: 'Abyssinian', temperament: 'Active, Energetic' },
      ]

      mockedAxios.get.mockResolvedValueOnce({ data: mockData })

      const result = await fetchCatBreedsAPI()
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.thecatapi.com/v1/breeds',
        {
          headers: {
            'x-api-key': 'test-api-key',
          },
        },
      )
      expect(result).toEqual(mockData)
    })
  })

  describe('voteCatAPI', () => {
    it('should send vote and return response data', async () => {
      const payload: VotePayload = {
        image_id: 'abc123',
        sub_id: 'user1',
        value: 1,
      }
      const mockResponseData = { message: 'SUCCESS' }

      mockedAxios.post.mockResolvedValueOnce({ data: mockResponseData })

      const result = await voteCatAPI(payload)
      expect(mockedAxios.post).toHaveBeenCalledWith(
        'https://api.thecatapi.com/v1/votes',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'test-api-key',
          },
        },
      )
      expect(result).toEqual(mockResponseData)
    })
  })
})
