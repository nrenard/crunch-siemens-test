import Joi from 'joi'

const schema = Joi.object({
  id: Joi.number().required()
})

export default (data: any) => schema.validate(data, { abortEarly: false }).error?.message
