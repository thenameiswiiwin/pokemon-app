import { useState } from 'react'
import PokemonForum from './PokemonForum'
import PokemonCard from './PokemonCard'


function App() {
  const [pokemonName, setPokemonName] = useState('')

  const handleSubmit = (newPokemonName) => setPokemonName(newPokemonName)

  return (
    <div className="mt-14 flex flex-col items-center justify-center font-semibold">
      <PokemonForum pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr className="my-7" />
      <div className="h-96 w-72 overflow-auto rounded bg-zinc-100 p-5">
        <PokemonCard pokemonName={pokemonName} />
      </div>
    </div>
  )
}

export default App
