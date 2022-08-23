
import axios from "axios";
import Film from './film/Film'
import { useState, useEffect,  useReducer } from "react";

function Accueil() {
    const [films, setFilms]=useState([]);
    const [favoris,dispatch] = useReducer(setFavoris,[])

    useEffect(() => {

        try {
            fetchData();
        } catch (error) {
            console.log(error)
        }

    })

    const fetchData= () => {
        axios.get('https://ghibliapi.herokuapp.com/films').then((response) => {
            setFilms(response.data);

        }).catch(err => console.log(err))

    }
    if(favoris.length<films.length){
        for (let i = 0; i < films.length; i++) {
            favoris[i]=false
            
           }
    }
  
  
    return (
        <div className='w-[80%] h-full grid grid-cols-4 gap-8 mx-auto my-12'>
            {films.map((film, index)=>{
               
               return( 
                        <Film key={index} id={index} image={film.movie_banner} title={film.title} release={film.release_date} duration={film.running_time} favoris={favoris[index]} setFavori={dispatch} />
                   
                )
            })}
        </div>

    );

    }

export default Accueil;

const setFavoris=(favoris,action)=>{
    switch (action.type) {
        case 'favoris':
            favoris[action.payload.id]=true;
            action.type="";
              return favoris;
        case 'notFavoris':
            favoris[action.payload.id]=false
              action.type="";    
            return favoris;
        default:
          return favoris;
      }

}