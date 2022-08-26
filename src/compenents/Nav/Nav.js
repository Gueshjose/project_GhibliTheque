import React from "react";
import './Nav.css';
import studio from '../../design/images/studio.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom";
import { faSun } from "@fortawesome/free-solid-svg-icons";


function Nav( props) {
    return (
            <div className="w-full flex jus h-[12vh] shadow-md bg-slate-100 dark:bg-[#201F39] dark:text-slate-50 border-0 shadow-slate-600 sticky top-0 z-30">
                <div className="w-1/6">
                    <img className="w-full dark:invert " src={studio} alt="" />
                </div>
                <div className="flex gap-28 items-center">
                    <Link to="./">
                        <p className="text-2xl cursor-ghibliC hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.95)] font-semibold">Accueil</p>
                    </Link>
                    <Link to='./favoris'>
                        <p className="text-2xl cursor-ghibliC hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.95)] font-semibold">Favoris</p>
                    </Link>
                </div>

                {   props.mode ==="lightMode" &&                 
                    <div className="w-[8%] h-[3.5vh] p-1  my-auto text-sm rounded-3xl relative font-bold  shadow-md shadow-slate-600">
                        < FontAwesomeIcon icon={faSun} className="absolute left-2  top-[0.6vh] lg:text-xl text-base  dark:text-slate-50 " />
                        <div className=" w-1/2 h-[2.5vh] bg-slate-200 dark:bg-[#161618] shadow-[inset_0_1px_3px_rgb(0, 0, 0 ,0.5)] mt-1/2 shadow-black rounded-xl mx-auto">
                            <div className="w-1/2 h-[90%] shadow-sm left-0  shadow-slate-600 rounded-full bg-slate-50  cursor-ghibliC" onClick={()=>props.changeMode('darkMode')}>
                            </div>
                        </div>
                        < FontAwesomeIcon icon={faMoon} className="absolute left-[6vw] top-[0.6vh] lg:text-xl text-base  dark:text-slate-50 " />
                    </div>
                }
                {   props.mode ==="darkMode" &&                 
                    <div className="w-[8%] h-[4vh] p-1  my-auto text-sm rounded-3xl relative font-bold  dark:bg-black   shadow-md shadow-slate-600">
                        < FontAwesomeIcon icon={faSun} className="absolute left-2  top-[0.6h] lg:text-xl text-base  dark:text-slate-50 " />
                        <div className=" w-1/2 h-[2.5vh] bg-slate-200 dark:bg-[#161618] shadow-[inset_0_1px_3px_rgb(0, 0, 0 ,0.5)] mt-1/2 shadow-black rounded-xl mx-auto">
                            <div className="w-1/2 h-[90%] shadow-sm  ml-7 shadow-slate-600 dark:shadow-white dark:bg-[#333333] rounded-full bg-slate-50  cursor-ghibliC" onClick={()=>props.changeMode('lightMode')}>
                            </div>
                        </div>
                        < FontAwesomeIcon icon={faMoon} className="absolute left-[6vw] top-[0.6vh] lg:text-xl text-base  dark:text-slate-50 " />
                    </div>
                }
                
            </div>

       
    );
}

export default Nav;
