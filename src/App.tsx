import React, { useEffect } from 'react'
import './App.css'
import { store } from './store/store'
import { PokemonsView } from './components'
import { useObserver } from 'mobx-react'

function App () {
  useEffect(() => {
    store.getPokemons()
  }, [])
  return useObserver(() => {
    return <PokemonsView store={store} />
  })
}
export default App
