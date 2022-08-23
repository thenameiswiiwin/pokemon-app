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

export default PokemonForum
