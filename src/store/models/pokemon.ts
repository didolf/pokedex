import { types, Instance } from 'mobx-state-tree'
import { PokemonStat, Spirites, Type } from './'

export const Pokemon = types.model('Pokemon', {
  id: types.number,
  name: types.string,
  height: types.number,
  weight: types.number,
  stats: types.array(types.late(() => PokemonStat)),
  sprites: types.maybeNull(types.late(() => Spirites)),
  types: types.array(types.late(() => Type))
})

export type PokemonInstance = Instance<typeof Pokemon>;
