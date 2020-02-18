import { types, flow, Instance } from 'mobx-state-tree'
import { Pokemon, Pagination } from './models'

export const Store = types
  .model('Store', {
    pokemons: types.array(Pokemon),
    fetchStatus: types.optional(types.enumeration(['pending', 'done']), 'done'),
    pagination: Pagination
  })
  .actions(self => ({
    getPokemons: flow(function * getPoks () {
      self.fetchStatus = 'pending'
      const { currentPage, perPage } = self.pagination
      const res = yield fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${(currentPage - 1) *
          perPage}&limit=${perPage}`
      ).then(res => res.json())
      self.pagination.total = res.count
      self.pokemons = yield Promise.all(
        res.results.map(({ url } : { url: string }) =>
          fetch(url).then(res => res.json())
        )
      )
      self.fetchStatus = 'done'
    })
  }))

export type StoreInstance = Instance<typeof Store>;

export const store = Store.create({
  pokemons: [],
  pagination: {
    currentPage: 1,
    perPage: 20,
    total: 0
  }
})
