import { useRef } from 'react'
import PokemonCard from './PokemonCard'
import Fallback from 'assets/fallback.jpg'

function PokemonDisplayFallback({ name }) {
  const initialName = useRef(name).current
  const fallbackData = {
    name: initialName,
    number: 'XXX',
    image: Fallback,
    attacks: {
      special: [
        { name: 'Loading Attack 1', type: 'Type', damage: 'XX' },
        { name: 'Loading Attack 2', type: 'Type', damage: 'XX' }
      ]
    },
    fetchedAt: 'loading...'
  }
  return <PokemonCard pokemon={fallbackData} />
}

export default PokemonDisplayFallback
