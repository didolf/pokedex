import { PokemonInstance } from '../store/models'

function getFilters (pokemons: PokemonInstance[]) {
  const uniquFfiltersName = new Set(
    pokemons.flatMap(({ types }) => types.map(({ type: { name } }) => name))
  )
  const filters = Array.from(uniquFfiltersName).map(name => ({ text: name, value: name }))
  return filters
}
export { getFilters }
