import { ITemplate } from '@/models/templates'

export interface ITemplatesModel {
  list: () => ITemplate[]
  findOne: (id: string) => ITemplate | undefined
}
