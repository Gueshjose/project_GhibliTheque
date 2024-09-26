
import { Routes, Route } from "react-router-dom";
import './App.css';
import Accueil from "./compenents/Accueil";
import Favoris from "./compenents/Favoris";
import InfoFilm from "./compenents/film/InfoFilm";
import Nav from './compenents/Nav/Nav';
import Burger from "./compenents/Nav/Burger";
import axios from "axios";

import {  useEffect, useState,  useReducer } from "react";



function App() {
  const [api, setApi]=useState([])
  const [searchWord, setSearch]=useState("")
  const [films, dispatch]= useReducer(setFilms,[])
  const [mode, setMode]=useState('lightMode')

  const fetchData= () => {
    axios.get('https://ghibliapi.vercel.app/films').then(response => {
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
        if (api.length==0) {
          fetchData();
          
        }
        changeMode()
         
          
      } catch (error) {
          console.log(error)
      }

  })


  



  return (
    <div className="App w-full min-h-[100vh] h-full bg-blue-100 dark:bg-[#161618]  ">

      <Nav changeMode={setMode} mode={mode} />
      <Burger changeMode={setMode} mode={mode} />
      <Routes>
        <Route  path='/' element={<Accueil  search={setSearch} word={searchWord} setFilms={dispatch}  films={films} api={api} />} />
        <Route  path='/Favoris' element={<Favoris  search={setSearch} word={searchWord} setFilms={dispatch}  films={films} api={api} />} />

        <Route path='/Info-Film/:id' element={<InfoFilm setFavoris={dispatch}  films={films} />} />
      </Routes>

    </div>
  );
}

export default App;


const setFilms=(films,action)=>{
  console.log(action.payload.id);
  
  switch (action.type) {
      case 'favoris':
        return films.map((film, index) => 
          index === action.payload.id ? { ...film, favoris: true } : film
        );
      case 'notFavoris':
        return films.map((film, index) => 
          index === action.payload.id ? { ...film, favoris: false } : film
        );
      case 'viewed':
        return films.map((film, index) => 
          index === action.payload.id ? { ...film, see: true } : film
        );
      case 'notViewed':
        return films.map((film, index) => 
          index === action.payload.id ? { ...film, see: false } : film
        );
      case 'filter':
        const sortedFilms = [...films];  
        MovieFilter(sortedFilms, action.payload.id);
        return sortedFilms; 
      default:
        return films;
    }

}
const MovieFilter=(films,sortId)=>{
  switch (sortId) {
    case 0:
      films.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 1:
      console.log('test');
      
      films.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 3:
      films.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
      break;
    case 2:
      films.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      break;
    case 4:
      films.sort((a, b) => a.running_time - b.running_time);
      break;
    case 5:
      films.sort((a, b) => b.running_time - a.running_time);
      break;
    default:
      break;
  }
}
