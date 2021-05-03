import React, {useEffect, useState} from 'react'

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
 const myStyledDiv = {
    backgroundColor: "darkgray",
  };
    return <div style={myStyledDiv}>
            <h1>Hi</h1>
            {characters.length !== 0 ? (
            characters.map((character) => {
              return <p>{character.name}<br></br>{character.species}<br></br>{character.status}<br></br>{character.gender}<br></br><img src={character.image}/>
              </p>;
        })
      ) : (
        <p>loading..</p>
      )}
        </div>
    
}
export default Home;

