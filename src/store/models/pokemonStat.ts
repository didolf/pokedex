import { types, Instance } from 'mobx-state-tree'
import { Stat } from './'

export const PokemonStat = types.model('PokemonStat', {
  base_stat: types.number,
  effort: types.number,
  stat: types.optional(types.late(() => Stat), { url: '', name: '' })
})

export type PokemonStatInstance = Instance<typeof PokemonStat>
