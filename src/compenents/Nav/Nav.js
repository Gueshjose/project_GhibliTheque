import React from "react";
import './Nav.css';
import studio from '../../design/images/studio.png'

function Nav() {
    return (
            <div className="w-full flex jus h-[12vh] shadow-md bg-slate-100 border-0 shadow-slate-600">
                <div className="w-1/6">
                    <img className="w-full" src={studio} alt="" />
                </div>
                <div className="flex gap-5 items-center">
                    <p className="text-2xl cursor-pointer hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.95)] font-semibold">Acceuil</p>
                    <p className="text-2xl cursor-pointer hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.95)] font-semibold">Favoris</p>
                </div>
            </div>

       
    );
}

export default Nav;
