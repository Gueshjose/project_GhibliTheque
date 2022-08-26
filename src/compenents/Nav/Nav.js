import React from "react";
import './Nav.css';
import studio from '../../design/images/studio.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from "@fortawesome/free-regular-svg-icons";


function Nav() {
    return (
            <div className="w-full flex jus h-[12vh] shadow-md bg-slate-100 border-0 shadow-slate-600 sticky top-0 z-30">
                <div className="w-1/6">
                    <img className="w-full dark:invert " src={studio} alt="" />
                </div>
                <div className="flex gap-28 items-center">
                    <p className="text-2xl cursor-pointer hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.95)] font-semibold">Accueil</p>
                    <p className="text-2xl cursor-pointer hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.95)] font-semibold">Favoris</p>
                </div>
                <button className="w-[8%] h-[5vh]  my-auto text-sm rounded-3xl relative active:scale-90 font-bold  bg-black text-slate-50 border-2 border-slate-50 shadow-md shadow-slate-600">
                < FontAwesomeIcon icon={faMoon} className="absolute left-2 top-2 lg:text-xl text-base  text-slate-50 " />
                    <p className="lg:text-base text-sm ml-3 my-auto">Dark Mode</p>
                </button>
            </div>

       
    );
}

export default Nav;
