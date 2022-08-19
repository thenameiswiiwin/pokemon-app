import { useState, useEffect } from 'react'
import Blastoise from 'assets/blastoise.jpg'
// import Fallback from 'assets/fallback.jpg'

const pokemonQuery = `
  {
    pokemon(name: "blastoise") {
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

function App() {
  const [pokemonName, setPokemonName] = useState('')

  useEffect(() => {
    window
      .fetch('https://graphql-pokemon2.vercel.app/', {
        method: 'POST',
        headers: { 'content-type': 'application/json;charset=UTF-8' },
        body: JSON.stringify({ query: pokemonQuery })
      })
      .then((res) => res.json())
      .then((data) => console.log(data.data.pokemon))
  }, [pokemonName])

  const handleSelect = (selectedName) => setPokemonName(selectedName)

  const handleChange = (e) => setPokemonName(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemonName(pokemonName)
  }

  return (
    <div className="mt-14 flex flex-col items-center justify-center font-semibold">
      {/* Forum */}
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

      {/* Line Break */}
      <hr className="my-7" />

      {/* Card */}
      <div className="h-116 w-72 overflow-auto rounded bg-zinc-100 p-5">
        {/* Display */}
        <div className="flex h-full flex-col items-center">
          <section className="mb-4 flex flex-col justify-center">
            <small className="self-end">10:08 50.405</small>
            <img
              className="max-h-52 max-w-full"
              src={Blastoise}
              alt="Blastoise"
            />
            <h2 className="mt-2 text-center text-2xl font-extrabold">
              Blastoise
              <sup>009</sup>
            </h2>
          </section>
          <section>
            <ul className="list-disc leading-none">
              <li>
                Flash Cannon: 60 <small>(Steel)</small>
              </li>
              <li>
                Gunk Shot: 65 <small>(Poison)</small>
              </li>
              <li>
                Hydrop Pump: 90 <small>(Water)</small>
              </li>
              <li>
                Ice Beam: 65 <small>(Ice)</small>
              </li>
            </ul>
          </section>
        </div>

        {/* Fallback */}
        {/* <div className="flex h-full flex-col items-center">
          <section className="mb-4 flex flex-col justify-center">
            <small className="self-end">loading...</small>
            <img
              className="max-h-52 max-w-full"
              src={Fallback}
              alt="Blastoise"
            />
            <h2 className="mt-2 text-center text-2xl font-extrabold">
              error
              <sup>XXX</sup>
            </h2>
          </section>
          <section>
            <ul className="list-disc leading-none">
              <li>
                Loading Attack 1: XX <small>(Type)</small>
              </li>
              <li>
                Loading Attack 1: XX <small>(Type)</small>
              </li>
            </ul>
          </section>
        </div> */}
      </div>
    </div>
  )
}

export default App
