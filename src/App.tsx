import React, { useEffect } from 'react'
import './App.css'
import { store } from './store/store'
import { PokemonsView } from './components'

function App () {
  useEffect(() => {
    store.getPokemons()
  }, [])
  return <PokemonsView store={store} />
}
export default App
