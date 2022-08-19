import Blastoise from 'assets/blastoise.jpg'

function App() {
  return (
    <div>
      {/* Forum */}
      <form>
        <label htmlFor="pokemonName-input">Pokemon Name</label>
        <small>
          Try <button type="button">Venusaur</button>
          {', '}
          <button type="button">Charizard</button>
          {', or '}
          <button type="button">Blastoise</button>
        </small>
        <div>
          <input placeholder="Pokemon Name..." />
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* <!-- End Forum -->*/}

      {/* Line Break */}
      <hr />

      {/* Card */}
      <div>
        {/* Info */}
        <div>
          {/* Display */}
          <section>
            <small>10:08 50.405</small>
            <img src={Blastoise} alt="Blastoise" />
            <h2>
              Blastoise
              <sup>009</sup>
            </h2>
          </section>
          <section>
            <ul>
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
          {/* <!-- End Display -->*/}
        </div>
        {/* <!-- End Info -->*/}
      </div>
      {/* <!-- End Card -->*/}
    </div>
  )
}

export default App
