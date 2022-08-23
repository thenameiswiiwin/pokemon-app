import { useState, useEffect, useRef } from 'react'
import fetchPokemon from 'utils/index.ts'
import Fallback from 'assets/fallback.jpg'

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

function PokemonDisplay({ pokemon }) {
  return (
    <div className="flex h-full flex-col items-center">
      <section className="mb-4 flex flex-col justify-center">
        <small className="self-end">{pokemon.fetchedAt}</small>
        <img
          className="max-h-52 max-w-full"
          src={pokemon.image}
          alt={pokemon.name}
        />
        <h2 className="mt-2 text-center text-2xl font-extrabold">
          {pokemon.name}
          <sup>{pokemon.number}</sup>
        </h2>
      </section>
      <section>
        <ul className="list-disc leading-none">
          {pokemon.attacks.special.map((attack) => (
            <li key={attack.name}>
              <label>{attack.name}</label>:{' '}
              <span>
                {pokemon.damage} <small>({attack.type})</small>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

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

function PokemonForum({ pokemonName, setPokemonName }) {
  const handleSelect = (selectedName) => setPokemonName(selectedName)
  const handleChange = (e) => setPokemonName(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemonName(pokemonName)
  }

  return (
    <form
      className="flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="pokemonName-input">Pokemon Name</label>
      <small className="font-medium">
        Try{' '}
        <button type="button" onClick={() => handleSelect('venusaur')}>
          Venusaur
        </button>
        {', '}
        <button type="button" onClick={() => handleSelect('charizard')}>
          Charizard
        </button>
        {', or '}
        <button type="button" onClick={() => handleSelect('blastoise')}>
          Blastoise
        </button>
      </small>
      <div>
        <input
          className="mt-2.5 mr-2.5 rounded-sm bg-zinc-100 px-2.5 leading-loose shadow-md"
          placeholder="Pokemon Name..."
          value={pokemonName}
          onChange={handleChange}
        />
        <button
          className="rounded-md border border-solid bg-red-600 py-1.5 px-2.5 text-white hover:bg-red-700 disabled:bg-red-700"
          type="submit"
          disabled={!pokemonName.length}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

function App() {
  const [pokemonName, setPokemonName] = useState('')

  return (
    <div className="mt-14 flex flex-col items-center justify-center font-semibold">
      <PokemonForum pokemonName={pokemonName} setPokemonName={setPokemonName} />
      <hr className="my-7" />
      <div className="h-96 w-72 overflow-auto rounded bg-zinc-100 p-5">
        <PokemonCard pokemonName={pokemonName} />
      </div>
    </div>
  )
}

export default App
