import { PokemonInstance } from '../store/models'

const tagsColors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple'
]

function getTypeToColorMap (pokemons: PokemonInstance[]) {
  const types = new Set(
    pokemons.flatMap(({ types }) => types.map(({ type: { name } }) => name))
  )
  const typeToColor: { [key: string]: string } = {}

  Array.from(types).forEach((type, idx) => {
    typeToColor[type] = tagsColors[idx % tagsColors.length]
  })
  return typeToColor
}

export {
  getTypeToColorMap
}
