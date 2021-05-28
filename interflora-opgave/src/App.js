import PokemonInfo from "./components/PokemonInfo";
import PokeModal from "./components/PokeModal";
function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "3rem", margin: "2rem" }}>
        Interflora opgave
      </h1>
      <PokeModal />
      <PokemonInfo />
    </>
  );
}

export default App;
