const formatDate = (date) => `
  ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')} ${String(
  date.getSeconds()
).padStart(2, '0')}.${String(date.getMilliseconds()).padStart(3, '0')}
`

function fetchPokemon(name, delay = 1500) {
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

  return window
    .fetch('https://graphql-pokemon2.vercel.app/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        delay: delay
      },
      body: JSON.stringify({
        query: pokemonQuery,
        variables: { name: name.toLowerCase() }
      })
    })
    .then(async (res) => {
      const { data } = await res.json()
      if (res.ok) {
        const pokemon = data?.pokemon
        if (pokemon) {
          pokemon.fetchedAt = formatDate(new Date())
          return pokemon
        } else {
          return Promise.reject(new Error(`No pokemon with the name "${name}"`))
        }
      } else {
        const error = {
          message: data?.errors?.map((e) => e.message).join('\n')
        }
        return Promise.reject(error)
      }
    })
}

export default fetchPokemon
