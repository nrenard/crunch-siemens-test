import { Request, Response } from 'express'

import { IController, TValidators } from '@/@types/protocols'
import { TGetTemplate } from '../@types'

import { ok, notFoundRequest, serverError, badRequest } from '@/shared'

class GetTemplate implements IController {
  private readonly validateData: TValidators
  private readonly serviceGetTemplate: TGetTemplate

  constructor ({ validateData, serviceGetTemplate }) {
    this.serviceGetTemplate = serviceGetTemplate
    this.validateData = validateData
  }

  public handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { params } = req

      const error = this.validateData(params)
      if (error) return res.adaptiveResponse(badRequest(error))

      const template = this.serviceGetTemplate(params.id)

      if (!template) return res.adaptiveResponse(notFoundRequest('Template not found.'))

      return res.adaptiveResponse(ok(template))
    } catch (err) {
      console.error(err)
      return res.adaptiveResponse(serverError())
    }
  }
}

export default GetTemplate
