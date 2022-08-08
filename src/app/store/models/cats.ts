export interface Cat {
  breeds: Array<SelectOption>
  id: string
  url: string
}

export interface CatSearchParams {
  size?: 'small' | 'med' | 'full'
  mime_types?: 'gif'| 'jpg' | 'png'
  format?: 'json' | 'src'
  order?: 'RANDOM' | 'ASC' | 'DESC'
  page?: number
  limit?: number
  category_ids?: string
  breed_ids?: string
  has_breeds?: string
  include_categories?: boolean
  include_breeds?: boolean
}

export interface SelectOption{
  name: string
  id: string
}

