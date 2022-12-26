import { serverError, ok, notFoundRequest, badRequest } from '@/shared'

import { GetTemplate } from './index'

import { IHttpResponse, TValidators } from '@/@types/protocols'
import { TGetTemplate } from '../@types'

type IMakeSut = (functions?: any) => {
  sut: GetTemplate
  serviceGetTemplate: TGetTemplate
}

const data = { title: 'Business Site Template - 7111', cost: '45.00', id: '7111', description: 'Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis', thumbnail: '7111-m.jpg', image: '7111-b.jpg' }

const makeSut: IMakeSut = (functions = {}) => {
  const serviceGetTemplate: TGetTemplate = () => (data)
  const validateData: TValidators = () => undefined

  const params = {
    serviceGetTemplate,
    validateData,
    ...functions
  }

  const sut = new GetTemplate(params)

  return {
    sut,
    serviceGetTemplate
  }
}

const requestMockMount = (id = 2): any => ({ params: { id } })

const responseMockMount = (): any => ({ adaptiveResponse: (value: IHttpResponse) => value })

describe('GetTemplate Controller', () => {
  test('Should call get template with error in id', async () => {
    const serviceGetTemplate = jest.fn().mockReturnValue(undefined)

    const { sut } = makeSut({ serviceGetTemplate })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(notFoundRequest('Template not found.'))
    expect(serviceGetTemplate).toHaveBeenCalledWith(2)
  })

  test('Should call get template with bad request error', async () => {
    const error = 'error message'

    const validateData: any = () => error

    const { sut } = makeSut({ validateData })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(badRequest(error))
  })

  test('Should call get template with internal error', async () => {
    const serviceGetTemplate: any = () => {
      throw new Error('Error')
    }

    const { sut } = makeSut({ serviceGetTemplate })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(serverError())
  })

  test('Should call get template with success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(ok(data))
  })
})
