export const templatesPath = {
  get: {
    tags: ['Templates'],
    summary: 'Route to list templates',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/listTemplates'
            }
          }
        }
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}

export const getTemplatePath = {
  get: {
    tags: ['Templates'],
    summary: 'Route to get template',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'ID from template',
        required: true
      }
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/template'
            }
          }
        }
      },
      404: {
        $ref: '#/components/serverError'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
