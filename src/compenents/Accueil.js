

import Film from './film/Film'
import Barre from './Barre/Barre';

function Accueil(props) {
    return (
        <div className='w-full h-full py-[5vh]'>
             
      <Barre search={props.search} filter={props.setFilms} />
        <div className='lg:w-[80%] w-[85%]  h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto my-[5vh]'>
            {props.api.map((film, index)=>{
               if (props.films.length<22){
                    props.films[index]=film
                    props.films[index].favoris=false  
                    props.films[index].see=false 
                    
               }
               return( 
                        <Film key={index} id={index} word={props.word} image={props.films[index].movie_banner} title={props.films[index].title} release={props.films[index].release_date} duration={props.films[index].running_time} favoris={props.films[index].favoris} setFavori={props.setFilms} film={props.films[index]}/>
                   
                )
            })}
        </div>
            </div>
    );

    }

export default Accueil;
