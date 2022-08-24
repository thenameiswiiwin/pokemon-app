import { useState, useEffect } from 'react'
import type { PokemonData } from '../types'
import PokemonDisplay from './CardDisplay'
import PokemonDisplayFallback from './CardDisplayFallback'
import fetchPokemon from 'utils/index'

type PokemonCardState = {
  status: 'pending' | 'idle' | 'resolved' | 'rejected'
  pokemon?: null | PokemonData
  error?: null | Error
}
function PokemonCard({ pokemonName }: { pokemonName: string }) {
  const [{ pokemon, error, status }, setState] = useState<PokemonCardState>({
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
    return <span>Submit a pokemon</span>
  } else if (status === 'pending') {
    return <PokemonDisplayFallback name={pokemonName} />
  } else if (status === 'rejected') {
    throw error
  } else if (status === 'resolved') {
    return <PokemonDisplay pokemon={pokemon} />
  }
}

export default PokemonCard
