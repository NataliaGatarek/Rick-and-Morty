import React, {useEffect, useState} from 'react'
import Charakters from "./Charakters.js";
import "./Charakters.css"
import ReactPaginate from 'react-paginate';
import "./Pagination.css"
import logo from "./imgg/r.png";


function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchBaner, setSearchBaner] = useState('');
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);
  const Url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`
  const fetchApi = () => {
    fetch(Url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
        setPageCount(data.info.pages);
      });
      
  };
  useEffect(() => {
    fetchApi();
  }, [currentPage]);
  const handlePageChange = (selectedObject) => {
    console.log(selectedObject.selected);
		setcurrentPage(selectedObject.selected+1);
		
	};
  return <React.Fragment>
    <div><img src={logo} alt="logo" className="logo" /></div>
    <div className="search">
      <input type="text" className="inp" placeholder="search" onChange={event => { setSearchBaner(event.target.value) }}/>
    </div>
    {!loading ? (
      <ReactPaginate
          pageCount={pageCount}
					pageRange={2}
					marginPagesDisplayed={2}
					onPageChange={handlePageChange}
					containerClassName={'con'}
					previousLinkClassName={'page'}
					breakClassName={'page'}
					nextLinkClassName={'page'}
					pageClassName={'page'}
					disabledClassNae={'disabled'}
					activeClassName={'active'}
      />)
      : (
				<div>Nothing more to display</div>
			)} 
    <div className="container">
    {!loading ? (
    characters.filter((character) =>
      character.name
    .toLowerCase()
    .includes(searchBaner.toLowerCase())
    )
    .map((character) =>
        {
      return <Charakters key={character.id} character={character} />
        })
      ) : (
        <p>loading..</p>
      )}
    </div>
  </React.Fragment>
}
export default Home;

