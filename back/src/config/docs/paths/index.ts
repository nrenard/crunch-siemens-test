import { templatesPath, getTemplatePath } from './templates'
// import { userPath, usersDetailPath } from './user'

export default {
  '/templates': templatesPath,
  '/templates/{id}': getTemplatePath
}
