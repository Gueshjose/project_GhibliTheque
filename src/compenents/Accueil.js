

import Film from './film/Film'
import Barre from './Barre/Barre';

function Accueil(props) {
    return (
        <div className='w-full h-full py-5'>
             
      <Barre search={props.search} />
        <div className='w-[80%] h-full grid grid-cols-4 gap-8 mx-auto my-12'>
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
