import axios from "axios";
import { useEffect, useState } from "react";
import "./PokemonInfo.css";
const PokemonInfo = ({ pokemon, setPokemon }) => {
  const randomNum = Math.floor(Math.random() * 152);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        .then((res) => setPokemon(res.data))
        .then(setLoaded(true));
    }

    fetchData();
  }, [setPokemon]);

  const randomizer = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
      .then((res) => setPokemon(res.data));
  };
  const toCheck = () =>
    loaded ? console.log("it's here") : console.log("not yet");
  toCheck();
  return (
    <>
      {loaded && (
        <div className="pokemon-card">
          <h1 className="pokemon-name">
            {/* {!loaded
              ? "sss"
              : pokemon.name.charAt(0).toUpperCase() +
                pokemon.name.substring(1)} */}
            {pokemon.name}
          </h1>
          <div className="pokemon-info">
            <h4>Pokedex number: {pokemon.id}</h4>
            <p>Base experience: {pokemon.base_experience}</p>
            <p>Height: {(pokemon.height * 0.1).toFixed(1)} m</p>
            <p>Weight: {(pokemon.weight * 0.1).toFixed(1)} kg</p>
          </div>
          <div>
            <img src={pokemon.sprites.back_default} alt="back" />
            <img src={pokemon.sprites.front_default} alt="front" />
          </div>
          <button onClick={randomizer}>Click for random pokemon!</button>
          <button onClick={toCheck}>Click to check!</button>
        </div>
      )}
    </>
  );
};
export default PokemonInfo;
