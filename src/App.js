
import './App.css';
import Main from "./components/Main.js";
import background from "./img/rick.jpg"



function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`}}>
      <Main />
    </div>
  );
}

export default App;
