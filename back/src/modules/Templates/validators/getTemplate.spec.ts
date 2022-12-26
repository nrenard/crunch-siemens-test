import { getTemplateValidate } from './index'

describe('getTemplateValidate Validator', () => {
  const data = {
    id: 1
  }

  test('Should call Validation with correct value', async () => {
    const error = getTemplateValidate(data)
    expect(error).toBeUndefined()
  })

  test('Should call Validation with incorrect id', async () => {
    const error = getTemplateValidate({ ...data, id: 'test' })
    expect(error).toBe('"id" must be a number')
  })

  test('Should call Validation without id', async () => {
    const error = getTemplateValidate({ ...data, id: undefined })
    expect(error).toBe('"id" is required')
  })

  test('Should call Validation with other param', async () => {
    const error = getTemplateValidate({ ...data, test: '' })
    expect(error).toBe('"test" is not allowed')
  })
})
