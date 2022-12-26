import express from 'express'
import path from 'path'

import { setupMiddlewares, setupDocs, configEnv } from '@/config'

import setupModules from './modules'

configEnv()

const app = express()

setupMiddlewares(app)
setupModules(app)

app.use('/static', express.static(path.resolve(__dirname, 'static')))

setupDocs(app)

export default app
