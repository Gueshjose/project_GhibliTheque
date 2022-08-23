import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';



//Création des cards des films 
function Film(props) {
    
    return (
        <div className='  border-2 border-[ridge]] bg-slate-100 border-slate-400 shadow-md shadow-slate-600  hover:scale-110 hover:bg-orange-600 hover:border-yellow-500 hover:shadow-lg hover:text-slate-200 hover:shadow-yellow-500 hover:cursor-pointer'>
                <div className='relative'>
                    <img src={props.image} alt="" />
                    { props.favoris===true ?
                        <div className='absolute hover:border-2  border-slate-200 hover:rounded-full  z-10 top-2  left-2 p-3 hover:bg-[rgba(147,218,238,0.4)]  hover:shadow-md  hover:shadow-slate-900'>
                             <FontAwesomeIcon icon={faStar} className="text-2xl  text-yellow-400 z-20 hover:text-yellow-100" onClick={()=>props.setFavori({ type: 'notFavoris', payload: {id: props.id}})}  />
                        </div> 
                    :
                        <div className='absolute  hover:border-2  border-slate-200 hover:rounded-full  z-10 top-2 left-2 p-3 hover:shadow-md hover:bg-[rgba(147,218,238,0.4)] hover:shadow-slate-900'>
                            <FontAwesomeIcon icon={faStar} className="text-2xl  border-solid text-[rgba(255,255,255,0.6)]  z-20 hover:text-yellow-200 " onClick={()=>props.setFavori({ type: 'favoris', payload: {id: props.id}})} /> 
                        </div>
                    }
                    
                </div>
                <div className='m-2'>
                    <h4 className='text-center font-bold underline m-2'>{props.title.toUpperCase()}</h4>
                    <p className='text-left text-sm'><span className='font-semibold underline'>Release Date :</span> {props.release}</p>
                    <p className='text-left text-sm'><span className='font-semibold underline'>Duration :</span> {Math.floor(props.duration/60) + " h " + props.duration%60} min.</p>

                </div>
        </div>
    );
};

export default Film;