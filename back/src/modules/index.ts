
import { Express } from 'express'

import Templates from './Templates'

export default (app: Express): void => {
  app.use(Templates)
}
