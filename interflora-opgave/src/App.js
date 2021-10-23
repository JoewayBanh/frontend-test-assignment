import { useState } from "react";
import PokemonInfo from "./components/PokemonInfo";
import PokeModal from "./components/PokeModal";

function App() {
  const [pokemon, setPokemon] = useState(null);

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "3rem", margin: "2rem" }}>
        API call project
      </h1>
      <PokeModal pokemon={pokemon} setPokemon={setPokemon} />
      <PokemonInfo pokemon={pokemon} setPokemon={setPokemon} />
    </>
  );
}

export default App;
