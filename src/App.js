import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Accueil from "./components/Accueil";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;
