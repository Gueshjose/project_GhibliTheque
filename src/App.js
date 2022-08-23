
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Accueil from "./components/Accueil";
import Nav from './compenent/Nav/Nav'
import Barre from './compenent/Barre/Barre'



function App() {

  return (
    <div className="App">

      <Nav></Nav>
      <Barre></Barre>
      <Routes>
        <Route  path='/' element={<Accueil />} />
      </Routes>

    </div>
  );
}

export default App;
