import { types, Instance } from 'mobx-state-tree'

export const Spirites = types.model('Spirites', {
  front_default: types.maybeNull(types.string)
})

export type SpiritesInstance = Instance<typeof Spirites>
