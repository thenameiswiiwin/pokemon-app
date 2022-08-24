import { useState, useEffect } from 'react'
import PokemonDisplay from './CardDisplay'
import PokemonDisplayFallback from './CardDisplayFallback'
import fetchPokemon from 'utils/index.ts'

function PokemonCard({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!pokemonName) return
    setPokemon(null)
    fetchPokemon(pokemonName).then(
      (pokemon) => setPokemon(pokemon),
      (error) => setError(error)
    )
  }, [pokemonName])

  if (error) {
    return (
      <div role="alert">
        <h3 className="font-bold">There was an error:</h3>
        <p className="mt-2 font-medium whiteSpace-normal">{error.message}</p>
      </div>
    )
  }

  if (!pokemonName) {
    return 'Submit a pokemon'
  } else if (!pokemon) {
    return <PokemonDisplayFallback name={pokemonName} />
  } else {
    return <PokemonDisplay pokemon={pokemon} />
  }
}

export default PokemonCard
