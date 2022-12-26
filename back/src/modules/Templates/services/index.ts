import dataTemplates from '@/config/database/templates.json'
import { Templates as templates } from '@/models'

import listTemplatesFactory from './listTemplates'
import getTemplatesFactory from './getTemplate'

const Templates = templates(dataTemplates)

export const listTemplates = listTemplatesFactory({ Templates })
export const getTemplate = getTemplatesFactory({ Templates })
