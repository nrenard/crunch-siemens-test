import { serverError, ok } from '@/shared'

import { ListTemplates } from './index'

import { IHttpResponse } from '@/@types/protocols'
import { TListTemplates } from '../@types'

type IMakeSut = (functions?: any) => {
  sut: ListTemplates
  serviceListTemplates: TListTemplates
}

const data = [{ title: 'Business Site Template - 7111', cost: '45.00', id: '7111', description: 'Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis', thumbnail: '7111-m.jpg', image: '7111-b.jpg' }]

const makeSut: IMakeSut = (functions = {}) => {
  const serviceListTemplates: TListTemplates = () => (data)

  const params = {
    serviceListTemplates,
    ...functions
  }

  const sut = new ListTemplates(params)

  return {
    sut,
    serviceListTemplates
  }
}

const requestMockMount = (): any => ({})

const responseMockMount = (): any => ({ adaptiveResponse: (value: IHttpResponse) => value })

describe('ListTemplates Controller', () => {
  test('Should call list templates with internal error', async () => {
    const serviceListTemplates: any = () => {
      throw new Error('Error')
    }

    const { sut } = makeSut({ serviceListTemplates })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(serverError())
  })

  test('Should call list templates with success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(ok(data))
  })
})
