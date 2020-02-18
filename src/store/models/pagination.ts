import { types, getParent, Instance } from 'mobx-state-tree'

export const Pagination = types
  .model('Pagination', {
    perPage: types.optional(types.number, 20),
    currentPage: types.optional(types.number, 1),
    total: types.optional(types.number, 0)
  })
  .views(self => ({
    get store () {
      return getParent<any>(self, 2)
    },
    get pokemons () {
      return getParent<any>(self, 1)
    }
  }))
  .actions(self => ({
    changePagination (currentPage: number, perPage?: number) {
      if (perPage) {
        self.perPage = perPage
      }
      self.currentPage = currentPage
      self.pokemons.getPokemons()
    }
  }))

export type PaginationInstance = Instance<typeof Pagination>;
