import { Request, Response } from 'express'

import { IController } from '@/@types/protocols'
import { TListTemplates } from '../@types'

import { ok, serverError } from '@/shared'

class ListTemplates implements IController {
  private readonly serviceListTemplates: TListTemplates

  constructor ({ serviceListTemplates }) {
    this.serviceListTemplates = serviceListTemplates
  }

  public handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const templates = this.serviceListTemplates()
      return res.adaptiveResponse(ok(templates))
    } catch (err) {
      console.error(err)
      return res.adaptiveResponse(serverError())
    }
  }
}

export default ListTemplates
