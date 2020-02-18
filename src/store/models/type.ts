import { types, Instance } from 'mobx-state-tree'
import { PokemonType } from './'

export const Type = types.model('Type', {
  slot: types.number,
  type: PokemonType
})

export type TypeInstance = Instance<typeof Type>
