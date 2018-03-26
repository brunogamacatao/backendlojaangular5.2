import { Produto } from '.'

let produto

beforeEach(async () => {
  produto = await Produto.create({ id: 'test', titulo: 'test', descricao: 'test', foto: 'test', preco: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = produto.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(produto.id)
    expect(view.id).toBe(produto.id)
    expect(view.titulo).toBe(produto.titulo)
    expect(view.descricao).toBe(produto.descricao)
    expect(view.foto).toBe(produto.foto)
    expect(view.preco).toBe(produto.preco)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = produto.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(produto.id)
    expect(view.id).toBe(produto.id)
    expect(view.titulo).toBe(produto.titulo)
    expect(view.descricao).toBe(produto.descricao)
    expect(view.foto).toBe(produto.foto)
    expect(view.preco).toBe(produto.preco)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
