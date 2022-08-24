import { useState, useEffect } from 'react'
import PokemonDisplay from './CardDisplay'
import PokemonDisplayFallback from './CardDisplayFallback'
import ErrorFallback from './ErrorFallback'
import fetchPokemon from 'utils/index.ts'

function PokemonCard({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (!pokemonName) return
    setStatus('pending')
    fetchPokemon(pokemonName).then(
      (pokemon) => {
        setPokemon(pokemon), setStatus('resolved')
      },
      (error) => {
        setError(error)
        setStatus('rejected')
      }
    )
  }, [pokemonName])

  if (status === 'idle') {
    return 'Submit a pokemon'
  } else if (status === 'pending') {
    return <PokemonDisplayFallback name={pokemonName} />
  } else if (status === 'rejected') {
    return <ErrorFallback error={error} />
  } else if (status === 'resolved') {
    return <PokemonDisplay pokemon={pokemon} />
  }
}

export default PokemonCard
