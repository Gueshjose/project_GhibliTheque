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
        <div className="App">
            <div className="flex barre">
                <div className="relative"> 
                
                    <input type="text" className="shadow-sm bg-slate-100 border-0 cursor-ghibliC shadow-slate-600 dark:bg-[#201F39] dark:text-slate-50 rounded-lg pl-8 py-2" name="Search Bar" placeholder="Search your movie" onChange={changeWord} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-2 top-5 text-lg  dark:text-slate-50" />
                    
                </div>
                <Filter />
            </div>
        </div>
    );
}

export default Barre;