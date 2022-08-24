function CardDisplay({ pokemon }) {
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

export default CardDisplay
