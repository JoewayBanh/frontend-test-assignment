import PokemonInfo from "./components/PokemonInfo";
import PokeModal from "./components/PokeModal";
import { useState } from "react";
function App() {
  const [pokemon, setPokemon] = useState({
    sprites: {},
  });
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "3rem", margin: "2rem" }}>
        Interflora opgave
      </h1>
      <PokeModal pokemon={pokemon} setPokemon={setPokemon} />
      <PokemonInfo pokemon={pokemon} setPokemon={setPokemon} />
    </>
  );
}

export default App;
