import { mutations } from './store'

// destructure assign `mutations`
const { increment } = mutations

describe('mutations', () => {
  it('INCREMENT', () => {
    // mock state
    const state = { count: 0 }
    // apply mutation
    increment(state)
    // assert result
    expect(state.count).to.equal(1)
  })
})

export const getAllProducts = ({ commit }) => {
    commit('REQUEST_PRODUCTS')
    shop.getProducts(products => {
      commit('RECEIVE_PRODUCTS', products)
    })
  }