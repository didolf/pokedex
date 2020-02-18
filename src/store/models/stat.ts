import { types, Instance } from 'mobx-state-tree'

export const Stat = types.model('Stat', {
  name: types.string,
  url: types.string,
  description: types.optional(types.string, ''),
  fetchStatus: types.optional(types.enumeration(['done', 'pending']), 'done')
})

export type StatInstance = Instance<typeof Stat>;
