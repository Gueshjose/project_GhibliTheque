
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';


function InfoFilm(props){
    const params =useParams()
    return(
        <div className="w-full h-full">
            <div className="w-full h-[60vh]  text-centerv overflow-hidden z-0 shadow-md shadow-slate-600">
                <img src={props.films[params.id].movie_banner} className="w-full h-full brightness-50" alt="" />
                { props.films[params.id].favoris===true ?
                        <div className='absolute  z-10 top-[13vh] left-2 p-1'>
                             <FontAwesomeIcon icon={faStar} className="text-4xl cursor-ghibliC text-yellow-400 z-20 hover:scale-125 hover:text-yellow-100" onClick={()=>props.setFavoris({ type: 'notFavoris', payload: {id: params.id}})}  />
                             { props.films[params.id].see===true ?
                                    <div className='absolute  z-10 top-[8vh] left-[0.1vw] '>
                                        <FontAwesomeIcon icon={faEye} className="text-4xl cursor-ghibliC text-cyan-400 z-20 hover:scale-125 hover:text-cyan-100" onClick={()=>props.setFavoris({ type: 'notViewed', payload: {id: params.id}})}  />
                             
                                    </div> 
                                    :
                                    <div className='absolute    z-10 top-[8vh] left-[0.1vw]  '>
                                        <FontAwesomeIcon icon={faEye} className="text-4xl cursor-ghibliC  text-[rgba(255,255,255,0.6)] hover:scale-125  z-20 hover:text-cyan-200 " onClick={()=>props.setFavoris({ type: 'viewed', payload: {id:params.id}})} /> 
                                    </div>
                            }
                        </div> 
                    :
                        <div className='absolute    z-10 top-[13vh] left-2 p-1 '>
                            <FontAwesomeIcon icon={faStar} className="text-4xl cursor-ghibliC  text-[rgba(255,255,255,0.6)] hover:scale-125  z-20 hover:text-yellow-200 " onClick={()=>props.setFavoris({ type: 'favoris', payload: {id:params.id}})} /> 
                        </div>
                    }
                <h1 className="text-6xl z-10 absolute top-56 left-[40%] font-extrabold underline text-white drop-shadow-[3px_2px_5px_rgba(0,0,0,0.6)]">{props.films[params.id].title.toUpperCase()}</h1>
                <h2 className="text-2xl z-10 absolute top-72 left-2/4 italic font-bold text-white drop-shadow-[2px_1px_3px_rgba(0,0,0,0.8)]">{props.films[params.id].original_title} / {props.films[params.id].original_title_romanised}</h2>
                <div className="grid grid-cols-12 grid-rows-2  z-10 absolute font-semibold top-96 text-white w-full drop-shadow-[3px_2px_5px_rgba(0,0,0,0.6)]">
                    <p className='col-start-7 col-span-4 col'>
                        PRODUCER: {props.films[params.id].producer}
                    </p>
                    <p className='col-start-8  col-span-4'>
                        DIRECTOR: {props.films[params.id].director}
                    </p>

                </div>
            </div>
            <div className=' w-full h-[40vh] '>
                <div className=" w-1/4 absolute top-[18vh] left-36 ">
                    <img src={props.films[params.id].image} className="shadow-[-15px_-12px_25px_black] w-full h-full rounded-md border-gray-200 border-2 -skew-y-6" alt="" />
                </div>
                

                <div className="relative p-3 grid grid-cols-12 mt-12">
                   <blockquote  className='relative rounded-md text-gray-500 italic  bg-slate-100 col-start-6 col-span-5 text-justify dark:bg-[#201F39] dark:text-slate-50  text-xl p-5 border-[1px] border-transparent shadow-md shadow-black'>
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-5xl  text-gray-500  dark:text-slate-50 absolute top-[-4vh]"  /> 
                        {props.films[params.id].description}  
                        <FontAwesomeIcon icon={faQuoteRight} className="text-5xl  text-gray-500  dark:text-slate-50 absolute bottom-[-4vh] right-5 "  /> 
                    </blockquote>
                    <p className="absolute text-xl font-bold text-rose-800 top-[-65vh] left-[91vw] z-20 drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.8)] bg-[rgba(255,255,255,0.2)]" >
                      SCORE:  {props.films[params.id].rt_score}
                    </p> 
                </div>
            </div>


        </div>
    )
}

export default InfoFilm;