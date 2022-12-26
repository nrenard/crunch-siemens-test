import { ITemplatesModel } from '@/@types/models'

interface IFactory {
  Templates: ITemplatesModel
}

export default ({ Templates }: IFactory) => {
  const handle = () => Templates.list()
  return handle
}
