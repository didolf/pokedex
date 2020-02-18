import { types, Instance } from 'mobx-state-tree'

export const PokemonType = types.model('PokemonType', {
  name: types.string
})

export type PokemonTypeInstance = Instance<typeof PokemonType>
