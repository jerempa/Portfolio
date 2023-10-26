import './App.css';
import NavBar from "./navbar";
import About from "./about";
import CV from "./cv";
import Showcase from './showcase';



function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <CV />
      <Showcase />
    </div>
  );
}

export default App;
