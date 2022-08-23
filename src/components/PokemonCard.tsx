import { useState, useEffect } from 'react'
import PokemonDisplay from './PokemonDisplay'
import PokemonDisplayFallback from './PokemonDisplayFallback'
import fetchPokemon from 'utils/index.ts'

function PokemonCard({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    if (!pokemonName) return
    setPokemon(null)
    fetchPokemon(pokemonName).then((pokemon) => setPokemon(pokemon))
  }, [pokemonName])

  if (!pokemonName) {
    return 'Submit a pokemon'
  } else if (!pokemon) {
    return <PokemonDisplayFallback name={pokemonName} />
  } else {
    return <PokemonDisplay pokemon={pokemon} />
  }
}

export default PokemonCard
