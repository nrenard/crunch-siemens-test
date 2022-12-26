import { ITemplatesModel } from '@/@types/models'

export interface ITemplate {
  title: string
  cost: string
  id: string
  description: string
  thumbnail: string
  image: string
}

export default (data: ITemplate[]): ITemplatesModel => {
  return {
    list: () => data,
    findOne: (id: string) => data.find((item) => item.id === id)
  }
}
