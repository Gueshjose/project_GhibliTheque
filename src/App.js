
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Accueil from "./compenents/Accueil";
import Nav from './compenents/Nav/Nav'
import Barre from './compenents/Barre/Barre'



function App() {

  return (
    <div className="App">

      <Nav />
      <Barre />
      <Routes>
        <Route  path='/' element={<Accueil />} />
      </Routes>

    </div>
  );
}

export default App;
