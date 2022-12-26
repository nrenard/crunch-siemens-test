
import { IHttpResponse } from '@/@types/protocols'

export const badRequest = (error: string): IHttpResponse => ({
  statusCode: 400,
  body: { error }
})

export const notFoundRequest = (error: string): IHttpResponse => ({
  statusCode: 404,
  body: { error }
})

export const serverError = (): IHttpResponse => ({
  statusCode: 500,
  body: { error: 'Internal server error.' }
})

export const ok = (data: any): IHttpResponse => ({
  statusCode: 200,
  body: data
})

export const create = (data: any): IHttpResponse => ({
  statusCode: 201,
  body: data
})

export const notAuthorized = (): IHttpResponse => ({
  statusCode: 401,
  body: { error: 'Not authorized.' }
})
