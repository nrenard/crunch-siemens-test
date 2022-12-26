import { ITemplatesModel } from '@/@types/models'

interface IFactory {
  Templates: ITemplatesModel
}

export default ({ Templates }: IFactory) => {
  const handle = (id: string) => Templates.findOne(id)
  return handle
}
