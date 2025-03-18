import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1> Hello </h1>
      <Heading name="Info"/>
    </div>
  );
}

function Heading({name}) {
  return(
  <div>
    <h2>Статья про {name}</h2>
    <p>Новый текст ...</p>
  </div>
  )
}

export default App;
