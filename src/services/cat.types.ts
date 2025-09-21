export interface CatBreed {
  id: string
  name: string
  description: string
  temperament: string
  origin: string
  life_span: string
  wikipedia_url?: string
}

export interface VotePayload {
  image_id: string
  sub_id?: string
  value: number
}
