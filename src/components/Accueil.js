import React from 'react';
import axios from "axios";
import Film from './film/Film'
import { useState, useEffect } from "react";

function Accueil() {
    const [films, setFilms]=useState([]);
    const [favoris,setfavoris] = useState([])

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

   
   
    return (
        <div className='w-[80%] h-full grid grid-cols-4 gap-8 mx-auto my-6'>
            {films.map((film)=>{
               return( 
                        <Film image={film.movie_banner} title={film.title} release={film.release_date} duration={film.running_time} />
                   
                )
            })}
        </div>

    );

    }

export default Accueil;