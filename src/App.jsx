import "./App.css";
import { useEffect, useState } from "react";
import List from "./components/CharCard";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacters(response.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(characters);
  return (
    <div className="App">
      <h1 className="pageTitle">Meus Personagens</h1>
      {characters && <List characters={characters} />}
    </div>
  );
}

export default App;
