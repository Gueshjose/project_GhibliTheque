import React from "react";
import './Nav.css';
import studio from '../../design/images/studio.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom";
import { faHome, faStar, faSun } from "@fortawesome/free-solid-svg-icons";


function Nav( props) {
    return (
            <div className="w-full md:flex jus h-[12vh] shadow-md bg-slate-100 dark:bg-[#201F39] dark:text-slate-50 border-0 shadow-slate-600 sticky top-0 z-30 hidden">
                <div className="w-[18vw]">
                    <img className="w-full dark:invert mt-[1vh] " src={studio} alt="" />
                </div>
                <div className="flex gap-28 items-center ">
                    <Link to="/project_GhibliTheque">
                        <p className="text-[2vw] cursor-ghibliC hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.95)] dark:hover:drop-shadow-[0_4px_6px_rgba(255,255,255,0.95)] font-semibold z-10 relative">
                            HOME
                            <FontAwesomeIcon icon={faHome} className="text-[3.5vw] absolute top-[-0.8vw] left-[4vw] opacity-20 "  />
                            
                        </p>

                    </Link>
                    <Link to='/project_GhibliTheque/Favoris'>
                        <p className="text-[2vw] cursor-ghibliC hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.95)] dark:hover:drop-shadow-[0_4px_6px_rgba(255,255,255,0.95)] font-semibold z-10 relative">
                            FAVORITES
                            <FontAwesomeIcon icon={faStar} className="text-[3.5vw] absolute top-[-0.8vw] left-[8.5vw] opacity-20"  />
                        </p>
                        

                    </Link>
                </div>

                

                {   props.mode ==="lightMode" &&                 
                    <div className="w-[9vw] h-[4vh] p-1  my-auto text-sm rounded-3xl relative font-bold  shadow-md shadow-slate-600">
                        < FontAwesomeIcon icon={faSun} className="absolute left-[0.6vw]  top-[0.8vh] text-[1.3vw] text-base  dark:text-slate-50 " />
                        <div className=" w-1/2 h-[2.5vh]  bg-gray-400 dark:bg-[#161618] shadow-[inset_0_1px_3px_rgb(0, 0, 0 ,0.5)] mt-[0.4vh] shadow-black rounded-2xl mx-auto">
                            <div className="w-1/2 h-[99%] shadow-sm left-0  shadow-slate-600 rounded-full bg-slate-50  cursor-ghibliC" onClick={()=>props.changeMode('darkMode')}>
                            </div>
                        </div>
                        < FontAwesomeIcon icon={faMoon} className="absolute left-[6.8vw] top-[0.8vh] text-[1.3vw] text-base  dark:text-slate-50 " />
                    </div>
                }
                {   props.mode ==="darkMode" &&                 
                    <div className="w-[9vw] h-[4vh] p-1  my-auto text-sm rounded-3xl relative font-bold  dark:bg-black   shadow-md shadow-slate-600">
                        < FontAwesomeIcon icon={faSun} className="absolute left-[0.6vw]  top-[0.8vh] text-[1.3vw] text-base  dark:text-slate-50 " />
                        <div className=" w-1/2 h-[2.5vh] dark:bg-[#313135] shadow-[inset_0_1px_3px_rgb(0, 0, 0 ,0.5)] mt-[0.4vh] shadow-black rounded-2xl mx-auto">
                            <div className="w-1/2 h-[99%] shadow-sm  ml-[1.9vw] shadow-slate-600 dark:shadow-white dark:bg-black rounded-full bg-slate-50  cursor-ghibliC" onClick={()=>props.changeMode('lightMode')}>
                            </div>
                        </div>
                        < FontAwesomeIcon icon={faMoon} className="absolute left-[6.8vw] top-[0.8vh] text-[1.3vw] text-base  dark:text-slate-50 " />
                    </div>
                }
                
            </div>

       
    );
}

export default Nav;
