import { useState, useEffect } from 'react'

function PokemonForm({
  pokemonName: externalPokemonName,
  initialPokemonName = externalPokemonName || '',
  onSubmit
}: {
  pokemonName: string
  initialPokemonName?: string
  onSubmit: (newPokemonName: string) => void
}) {
  const [pokemonName, setPokemonName] = useState(initialPokemonName)

  useEffect(() => {
    if (typeof externalPokemonName === 'string') {
      setPokemonName(externalPokemonName)
    }
  }, [externalPokemonName])

  const handleSelect = (newPokemonName: string) => {
    setPokemonName(newPokemonName)
    onSubmit(newPokemonName)
  }
  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) =>
    setPokemonName(e.currentTarget.value)
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(pokemonName)
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
          id="pokemonName-input"
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

export default PokemonForm
