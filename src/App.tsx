import './App.css';
import NavBar from "./navbar";
import About from "./about";
import CV from "./cv";
import Showcase from './showcase';
import LanguageSwitcher from './languageswitch';



function App() {
  return (
    <div className="App">
      <LanguageSwitcher />
      <NavBar />
      <About />
      <CV />
      <Showcase />
    </div>
  );
}

export default App;
