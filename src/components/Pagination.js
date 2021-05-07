/* 

const [nextInf, setNextInf] = useState ("")
const [backInf, setBackInf] = useState ("")



fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => {
        setBacInf(data.info.prev)
        setNextInf(data.info.next)}

const pageNumber = (pageInfo) => {
  if pageInfo (== "next") {
  Home(nextInf)
  } else if (pageInfo == "prev") {
  Home(backInf)
  }
}


==========================================================================================================================




          <button type="button" onClick={ () => pageNumber(next) }>
          
          </button>
  
      
          <button type="button" onClick={ () => pageNumber(prev) }>
          
          </button>
        

*/