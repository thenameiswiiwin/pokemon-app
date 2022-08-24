import { useRef } from 'react'
import CardDisplay from './CardDisplay'
import Fallback from 'assets/fallback.jpg'

function CardDisplayFallback({ name }: { name: string }) {
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
  return <CardDisplay pokemon={fallbackData} />
}

export default CardDisplayFallback
