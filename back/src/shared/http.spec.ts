import { badRequest, ok, create, serverError, notAuthorized, notFoundRequest } from './index'

describe('http Shared', () => {
  test('Should call badRequest', () => {
    const response = badRequest('test')
    expect(response).toMatchObject({
      body: {
        error: 'test'
      },
      statusCode: 400
    })
  })

  test('Should call notFoundRequest', () => {
    const response = notFoundRequest('test')
    expect(response).toMatchObject({
      body: {
        error: 'test'
      },
      statusCode: 404
    })
  })

  test('Should call serverError', () => {
    const response = serverError()
    expect(response).toMatchObject({
      body: {
        error: 'Internal server error.'
      },
      statusCode: 500
    })
  })

  test('Should call ok', () => {
    const response = ok('test')
    expect(response).toMatchObject({
      body: 'test',
      statusCode: 200
    })
  })

  test('Should call create', () => {
    const response = create('test')
    expect(response).toMatchObject({
      body: 'test',
      statusCode: 201
    })
  })

  test('Should call notAuthorized', () => {
    const response = notAuthorized()
    expect(response).toMatchObject({
      body: { error: 'Not authorized.' },
      statusCode: 401
    })
  })
})
