import listTemplatesFactory from './listTemplates'

const data = [{ title: 'Business Site Template - 7111', cost: '45.00', id: '7111', description: 'Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis', thumbnail: '7111-m.jpg', image: '7111-b.jpg' }]

const ModelMock: any = {
  list: () => data
}

describe('listTemplates Service', () => {
  const listTemplates = listTemplatesFactory({ Templates: ModelMock })

  test('Should call get templates', async (done) => {
    const data = await listTemplates()

    expect(data).toStrictEqual(data)

    done()
  })
})
