import { Router } from 'express'

import { listTemplates, getTemplate } from './services'
import { ListTemplates, GetTemplate } from './controllers'
import { getTemplateValidate } from './validators'

const routes = Router()

const prefix = 'templates'

const listTemplatesController = new ListTemplates({
  serviceListTemplates: listTemplates
})
routes.get(`/${prefix}`, listTemplatesController.handle)

const getTemplatesController = new GetTemplate({
  validateData: getTemplateValidate,
  serviceGetTemplate: getTemplate
})
routes.get(`/${prefix}/:id`, getTemplatesController.handle)

export default routes
