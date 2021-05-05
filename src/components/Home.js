import React, {useEffect, useState} from 'react'
import Charakters from "./Charakters.js";
import "./Charakters.css"

function Home() {
    const [characters, setCharacters] = useState([]);
    const fetchApi = () => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  };

  useEffect(() => {
    fetchApi();
  });
  return <div className="container">
            {characters.length !== 0 ? (
        characters.map((character) =>
        {
          return <Charakters key={character.id} character = {character} />
        })
      ) : (
        <p>loading..</p>
      )}
        </div>
}
export default Home;

