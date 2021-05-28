import axios from "axios";
import { useEffect, useState } from "react";
import "./PokemonInfo.css";
const PokemonInfo = () => {
  const [pokemon, setPokemon] = useState({
    sprites: {},
  });

  let randomNum = Math.floor(Math.random() * 152);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
      .then((res) => setPokemon(res.data));
  }, []);

  const randomizer = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
      .then((res) => setPokemon(res.data));
    console.log("asd");
  };

  return (
    <>
      <div className="pokemon-card">
        <h1 className="pokemon-name">{pokemon.name}</h1>
        <div className="pokemon-info">
          <h4>Pokedex number: {pokemon.id}</h4>
          <p>Base experience: {pokemon.base_experience}</p>
          <p>Height: {pokemon.height}0 cm</p>
          <p>Weight: {pokemon.weight} kg(?)</p>
        </div>
        <div>
          <img src={pokemon.sprites.back_default} alt="front" />
          <img src={pokemon.sprites.front_default} alt="back" />
        </div>
        <button onClick={randomizer}>Click for random pokemon!</button>
      </div>
    </>
  );
};
export default PokemonInfo;
