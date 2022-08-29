
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';


function InfoFilm(props){
    const params =useParams()
    return(
        <div className="w-full h-full">
            <div className="w-full h-[55vh]   overflow-hidden z-0 shadow-md shadow-slate-600">
                <img src={props.films[params.id].movie_banner} className="w-full h-full brightness-50" alt="" />
                { props.films[params.id].favoris===true ?
                        <div className='absolute  z-10 md:top-[13vh] top-1 left-2 p-1'>
                             <FontAwesomeIcon icon={faStar} className=" md:text-[2.5vw] text-[8vw] cursor-ghibliC text-yellow-400 z-20 hover:scale-125 hover:text-yellow-100" onClick={()=>props.setFavoris({ type: 'notFavoris', payload: {id: params.id}})}  />
                             { props.films[params.id].see===true ?
                                    <div className='absolute  z-10 top-[8vh] left-[0.5vw] '>
                                        <FontAwesomeIcon icon={faEye} className="md:text-[2.5vw] text-[8vw] cursor-ghibliC text-cyan-400 z-20 hover:scale-125 hover:text-cyan-100" onClick={()=>props.setFavoris({ type: 'notViewed', payload: {id: params.id}})}  />
                             
                                    </div> 
                                    :
                                    <div className='absolute    z-10 top-[8vh] left-[0.5vw]  '>
                                        <FontAwesomeIcon icon={faEye} className="md:text-[2.5vw] text-[8vw] cursor-ghibliC  text-[rgba(255,255,255,0.6)] hover:scale-125  z-20 hover:text-cyan-200 " onClick={()=>props.setFavoris({ type: 'viewed', payload: {id:params.id}})} /> 
                                    </div>
                            }
                        </div> 
                    :
                        <div className='absolute    z-10 md:top-[13vh] top-1 left-2 p-1 '>
                            <FontAwesomeIcon icon={faStar} className="md:text-[2.5vw] text-[8vw] cursor-ghibliC  text-[rgba(255,255,255,0.6)] hover:scale-125  z-20 hover:text-yellow-200 " onClick={()=>props.setFavoris({ type: 'favoris', payload: {id:params.id}})} /> 
                        </div>
                    }
                <h1 className="md:text-[4.5vw] text-[10vw] z-10 absolute md:top-[16vh] top-[40vw] md:left-[38vw] left-[6vw]  font-extrabold underline text-white drop-shadow-[3px_2px_5px_rgba(0,0,0,0.6)]">{props.films[params.id].title.toUpperCase()}</h1>
                <h2 className="md:text-[1.4vw] text-[6vw]z-10 absolute md:top-[43vh] top-[56vw] md:left-[43vw] left-[6vw] italic font-bold text-white drop-shadow-[2px_1px_3px_rgba(0,0,0,0.8)]">{props.films[params.id].original_title} / {props.films[params.id].original_title_romanised}</h2>
                <div className="grid grid-cols-12 grid-rows-2  z-10  absolute font-semibold top-[48vh] text-white w-full drop-shadow-[3px_2px_5px_rgba(0,0,0,0.6)]">
                    <p className='md:col-start-6 col-start-2  col-span-6 col md:text-[2vw] text-[4vw]'>
                        PRODUCER: {props.films[params.id].producer}
                    </p>
                    <p className='md:col-start-7 col-start-6  col-span-6 md:text-[2vw] text-[4vw]'>
                        DIRECTOR: {props.films[params.id].director}
                    </p>

                </div>
            </div>
            <div className=' w-full h-[70vh] '>
                <div className=" w-[30vw] absolute top-[20vh] left-[7vw] ">
                    <img src={props.films[params.id].image} className="shadow-[-15px_-12px_25px_black] w-full h-full rounded-md border-gray-200 border-2 -skew-y-6 hidden md:block" alt="" />
                </div>
                

                <div className=" p-3 grid grid-cols-12 md:mt-[6vh] mt-2">
                   <blockquote  className='relative rounded-md text-gray-500 italic  bg-slate-100 md:col-start-7 md:col-span-5 text-justify col-start-2 col-end-12 dark:bg-[#201F39] dark:text-slate-50   p-5 border-[1px] border-transparent shadow-md shadow-black'>
                        <FontAwesomeIcon icon={faQuoteLeft} className="md:text-[3vw] text-[8vw]  text-gray-500  dark:text-slate-50 absolute md:top-[-3vh] top-[-2.5vh]"  />
                         <p className='md:text-[1.4vw] text-[4vw] drop-shadow-[2px_1px_3px_rgba(0,0,0,0.8)] dark:drop-shadow-[2px_1px_2px_rgba(255, 255, 255, 0.8)]'>
                            {props.films[params.id].description} 
                         </p>                        
                        <FontAwesomeIcon icon={faQuoteRight} className="md:text-[3vw] text-[8vw]  text-gray-500  dark:text-slate-50 absolute md:bottom-[-3vh] bottom-[-2.5vh] right-5 "  /> 
                    </blockquote>
                    <p className="absolute md:text-[1.6vw] text-[4.5vw] font-bold text-blue-600 top-[14vh] md:left-[91vw] left-[75vw] z-20 drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.8)]" >
                      SCORE:  {props.films[params.id].rt_score}
                    </p> 
                </div>
            </div>


        </div>
    )
}

export default InfoFilm;