
import { Routes, Route } from "react-router-dom";
import './App.css';
import Accueil from "./compenents/Accueil";
import InfoFilm from "./compenents/film/InfoFilm";
import Nav from './compenents/Nav/Nav';
import axios from "axios";

import {  useEffect, useState,  useReducer } from "react";



function App() {
  const [api, setApi]=useState([])
  const [searchWord, setSearch]=useState("")
  const [films, dispatch]= useReducer(setFilms,[])
  const [mode, setMode]=useState('lightMode')

  const fetchData= () => {
     axios.get('https://ghibliapi.herokuapp.com/films').then(response => {
        setApi(response.data);

    })
    .catch(error => console.log(error))

}
  const changeMode=()=>{
    if(mode==='lightMode'){
      document.querySelector('body').classList.remove('dark')
      
     } else{
      document.querySelector('body').classList.add('dark')
     }
  }

  useEffect(() => {

      try {
         fetchData();
         changeMode()
         
          
      } catch (error) {
          console.log(error)
      }

  })



  return (
    <div className="App h-[110%] bg-blue-100 dark:bg-[#161618]">

      <Nav changeMode={setMode} mode={mode} />
      <Routes>
        <Route  path='/' element={<Accueil  search={setSearch} word={searchWord} setFilms={dispatch}  films={films} api={api}  />} />
        <Route path='/Info-Film/:id' element={<InfoFilm setFavoris={dispatch}  films={films} />} />
      </Routes>

    </div>
  );
}

export default App;


const setFilms=(films,action)=>{
  switch (action.type) {
      case 'favoris':
          films[action.payload.id].favoris=true;
          action.type="";
            return films;
      case 'notFavoris':
        films[action.payload.id].favoris=false
            action.type="";    
          return films;
      case 'viewed':
          films[action.payload.id].see=true;
          action.type="";
          return films;
      case 'notViewed':
          films[action.payload.id].see=false
          action.type="";    
          return films;
      default:
        return films;
    }

}