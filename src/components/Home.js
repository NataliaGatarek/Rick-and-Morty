import React, {useEffect, useState} from 'react'
import Charakters from "./Charakters.js";
import "./Charakters.css"

function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchBaner, setSearchBaner] = useState('');
  const [loading, setLoading] = useState(true);
    const fetchApi = () => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      });
      
  };

  useEffect(() => {
    fetchApi();
  });
  return <React.Fragment>
    <div className="baner">
      <input type="text" placeholder="search" onChange={event => { setSearchBaner(event.target.value) }}/>
    </div>
    <div className="container">
    {!loading ? (
    characters.filter((character) =>
      character.name
    .toLowerCase()
    .includes(searchBaner.toLowerCase())
    )
    .map((character) =>
        {
          return <Charakters key={character.id} character = {character} />
        })
      ) : (
        <p>loading..</p>
      )}
    </div>
  </React.Fragment>
}
export default Home;

