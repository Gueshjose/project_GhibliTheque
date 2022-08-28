import React from "react";
import './Barre.css';
import Filter from "./Filter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


function Barre(props) {

    const changeWord=()=>{
        props.search(document.getElementsByTagName('input')[0].value);
        
    }
    return (
        <div className=" w-[80%] mx-auto">
            <div className="grid grid-cols-12 md:grid-rows-1 grid-rows-2 w-full">
                <div className="relative md:col-start-2 md:col-end-7 col-start-2 col-end-12 text-[2.5vw]  md:text-[1vw] "> 
                
                    <input type="text" className="shadow-sm  bg-slate-100 border-0 cursor-ghibliC shadow-slate-600 dark:bg-[#201F39] dark:text-slate-50 rounded-lg pl-7 w-full py-2" name="Search Bar" placeholder="Search your movie" onChange={changeWord} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-[1vw] top-[1.6vh] text-base  dark:text-slate-50" />
                    
                </div>
                <Filter />
            </div>
        </div>
    );
}

export default Barre;