import { useState, useEffect } from 'react'
import PokemonDisplay from './CardDisplay'
import PokemonDisplayFallback from './CardDisplayFallback'
// import ErrorFallback from './ErrorFallback'
import fetchPokemon from 'utils/index.ts'

function PokemonCard({ pokemonName }) {
  const [{ pokemon, error, status }, setState] = useState({
    pokemon: null,
    error: null,
    status: pokemonName ? 'pending' : 'idle'
  })

  useEffect(() => {
    if (!pokemonName) return
    setState({ status: 'pending' })
    fetchPokemon(pokemonName).then(
      (pokemon) => {
        setState({ pokemon, status: 'resolved' })
      },
      (error) => {
        setState({ error, status: 'rejected' })
      }
    )
  }, [pokemonName])

  if (status === 'idle') {
    return 'Submit a pokemon'
  } else if (status === 'pending') {
    return <PokemonDisplayFallback name={pokemonName} />
  } else if (status === 'rejected') {
    throw error
  } else if (status === 'resolved') {
    return <PokemonDisplay pokemon={pokemon} />
  }
}

export default PokemonCard
