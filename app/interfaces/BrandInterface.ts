
export interface Root {
  results: number
  metadata: Metadata
  data: BrandItem[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface BrandItem {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
