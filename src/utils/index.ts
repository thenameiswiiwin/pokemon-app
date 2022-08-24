import type { PokemonData } from '../types'

const formatDate = (date: Date) => `
  ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${String(
  date.getSeconds()
).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}
`

async function fetchPokemon(name: string): Promise<PokemonData> {
  const pokemonQuery = `
  query PokemonCard($name: String){
      pokemon(name: $name) {
        id
        number
        name
        image
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }
  `

  const res = await window.fetch('https://graphql-pokemon2.vercel.app/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify({
      query: pokemonQuery,
      variables: { name: name.toLowerCase() }
    })
  })

  type JSONRes = {
    data?: {
      pokemon: Omit<PokemonData, 'fetchedAt'>
      errors?: Array<{ message: string }>
    }
  }
  const { data }: JSONRes = await res.json()
  if (res.ok) {
    const pokemon = data?.pokemon
    if (pokemon) {
      return Object.assign(pokemon, { fetchedAt: formatDate(new Date()) })
    } else {
      return Promise.reject(new Error(`No pokemon with the same "${name}"`))
    }
  } else {
    const error = {
      message: data?.errors?.map((e) => e.message).join('\n')
    }
    return Promise.reject(error)
  }
}

export default fetchPokemon
