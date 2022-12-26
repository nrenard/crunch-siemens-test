import getTemplateFactory from './getTemplate'

const data = { title: 'Business Site Template - 7111', cost: '45.00', id: '7111', description: 'Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis', thumbnail: '7111-m.jpg', image: '7111-b.jpg' }

const ModelMock: any = {
  findOne: () => data
}

describe('getTemplate Service', () => {
  const getTemplate = getTemplateFactory({ Templates: ModelMock })

  test('Should call get template by id', async (done) => {
    const data = getTemplate('1')

    expect(data).toStrictEqual(data)

    done()
  })
})
