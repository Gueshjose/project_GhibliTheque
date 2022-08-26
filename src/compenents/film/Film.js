import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faInfoCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";


//Création des cards des films 
function Film(props) {
    if (props.title.toUpperCase().startsWith((props.word.toUpperCase()))) {
        
    
    return (
        
        <div className='rounded-md  border-2 border-[ridge]] bg-slate-100 border-slate-400 shadow-md shadow-slate-600 dark:bg-[#201F39] dark:text-slate-50  hover:scale-110  hover:border-yellow-500 dark:hover:border-gray-800 hover:shadow-lg  hover:shadow-yellow-500 dark:hover:shadow-blue-900 '>
                <div className='relative'>
                    <img src={props.image} alt="" />
                    { props.favoris===true ?
                        <div className='absolute hover:border-2  border-slate-200 hover:rounded-full  z-10 top-2  left-2 p-1 hover:bg-[rgba(147,218,238,0.4)]  hover:shadow-md  hover:shadow-slate-900'>
                             <FontAwesomeIcon icon={faStar} className="text-2xl cursor-ghibliC text-yellow-400 z-20 hover:text-yellow-100" onClick={()=>props.setFavori({ type: 'notFavoris', payload: {id: props.id}})}  />
                        </div> 
                    :
                        <div className='absolute  hover:border-2  border-slate-200 hover:rounded-full  z-10 top-2 left-2 p-1 hover:shadow-md hover:bg-[rgba(147,218,238,0.4)] hover:shadow-slate-900'>
                            <FontAwesomeIcon icon={faStar} className="text-2xl  cursor-ghibliC border-solid text-[rgba(255,255,255,0.6)]  z-20 hover:text-yellow-200 " onClick={()=>props.setFavori({ type: 'favoris', payload: {id: props.id}})} /> 
                        </div>
                    }
                    
                </div>
                <div className='m-2 relative '>
                    <h4 className='text-center font-bold underline m-2'>{props.title.toUpperCase()}</h4>
                    <p className='text-left text-sm'><span className='font-semibold underline'>Release Date :</span> {props.release}</p>
                    <p className='text-left text-sm'><span className='font-semibold underline'>Duration :</span> {Math.floor(props.duration/60) + " h " + props.duration%60} min.</p>
                    <Link to={`/Info-Film/${props.id}`}>
                        <FontAwesomeIcon icon={faInfoCircle} className=" absolute top-10 left-56 text-3xl   hover:scale-125 cursor-ghibliC "  /> 
                    </Link>
                </div>
        </div>
    );
}
};

export default Film;