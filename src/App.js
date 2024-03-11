import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <ImageComponent src="https://placedog.net/300" alt="dog1" display="block" margin="auto" />
      <ImageComponent src="https://placedog.net/400" alt="dog2" display="block" margin="auto" />

      <ButtonComponent text="Salva" bgColor="blue" color="white" size="3rem" btn="btn-class" />
      <ButtonComponent text="Modifica" bgColor="green" color="white" size="2rem" btn="btn-class" />
      <ButtonComponent text="Elimina" bgColor="red" color="black" size="1rem" btn="btn-class" />
    </div>
  );
}

export default App;
