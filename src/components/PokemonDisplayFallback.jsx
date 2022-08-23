import { useRef } from 'react'
import PokemonDisplay from './PokemonDisplay'
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
  return <PokemonDisplay pokemon={fallbackData} />
}

export default PokemonDisplayFallback
