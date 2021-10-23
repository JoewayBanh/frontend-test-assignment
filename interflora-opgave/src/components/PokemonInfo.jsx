import axios from "axios";
import { useEffect, useState } from "react";
import "./PokemonInfo.css";

const PokemonInfo = ({ pokemon, setPokemon }) => {
  const randomNum = Math.floor(Math.random() * 152);
  const [loading, setLoading] = useState(true);

  const getPokemonList = async () => {
    let pokemonArr = [];
    for (let i = 1; i <= 151; i++) {
      pokemonArr.push(await getPokemonData(i));
    }
    console.log(pokemonArr);
    setPokemon(pokemonArr);
    setLoading(false);
    // console.log(pokemon[randomNum].data.sprites);
  };
  const getPokemonData = async (randomNum) => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomNum}`
    );
    return res;
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  const randomizer = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
      .then((res) => setPokemon(res.data))
      .then(setLoading(true));
  };
  // const toCheck = () => {
  //   loading ? console.log("it's here") : console.log("not yet");
  // };

  // toCheck();
  return (
    <>
      <div className="pokemon-card">
        {loading ? (
          <h1>Loading data...</h1>
        ) : (
          <h1 className="pokemon-name">
            {pokemon[randomNum].data.name}
            {/* {pokemon[randomNum].data.name + pokemon.name.slice(1)} */}
            {/* {pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)} */}
          </h1>
        )}
        {/* <h1 className="pokemon-name">
          {loading
            ? "loading data"
            : pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)}
          {pokemon.name}
        </h1> */}
        <div className="pokemon-info">
          <h4>Pokedex number: {pokemon.id}</h4>
          <p>Base experience: {pokemon.base_experience}</p>
          <p>Height: {(pokemon.height * 0.1).toFixed(1)} m</p>
          <p>Weight: {(pokemon.weight * 0.1).toFixed(1)} kg</p>
        </div>
        <div>
          {/* {loading ? (
            <p>Loading images...</p>
          ) : (
            <img
              src={pokemon[randomNum].data.sprites.back_default}
              alt="back"
            />
          )} */}
          {/* <img  src={pokemon[randomNum].data.sprites.back_default} alt="back" /> */}
          {/* <img src={pokemon.sprites.front_default} alt="front" /> */}
          {/* <img src={pokemon.sprites.back_default} alt="back" />
          <img src={pokemon.sprites.front_default} alt="front" /> */}
        </div>
        <button onClick={randomizer}>Click for random pokemon!</button>
        {/* <button onClick={toCheck}>Click to check if API has loaded!</button> */}
      </div>
    </>
  );
};
export default PokemonInfo;
