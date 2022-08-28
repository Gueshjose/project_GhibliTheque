import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom";
import { faBars, faHome, faStar, faSun } from "@fortawesome/free-solid-svg-icons";
import logoBurger from '../../design/images/Ghibli.png';



function Burger(props){
     const appear=()=>{
        const home = document.querySelector('#home');
        const fav = document.querySelector('#fav');
        home.classList.toggle('translate-x-[-26vw]')

        fav.classList.toggle('translate-x-[34vw]')



        
     }
    return(
        <div id="burger" className=" sticky top-2 w-[30vw] mx-auto bg-white    dark:text-white rounded-[20%] border-2 border-neutral-700 relative active:scale-90 active:shadow-sm shadow-black dark:shadow-white shadow-md z-20 md:hidden  " >
            <FontAwesomeIcon icon={faBars} className="text-[15vw] absolute top-[6vw] left-[8vw] z-20"  />
            <img src={logoBurger} className="w-full dark:invert rounded-[20%] z-10 relative" alt="" onClick={appear} />         
            <div id="home" className="  items-center absolute transition-transform duration-500 top-[9.5vh]  opacity-95">
                    <Link to="./">
                        <p className=" relative text-[5vw] cursor-ghibliC hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.95)] dark:hover:drop-shadow-[0_4px_6px_rgba(255,255,255,0.95)] font-semibold  z-0">
                            HOME
                            <FontAwesomeIcon icon={faHome} className="text-[10vw] absolute top-[-12vw] left-[2vw] opacity-30 "  />
                            
                        </p>
                    </Link>
            </ div>
            <div id="fav" className="  items-center absolute transition-transform duration-500 top-[9.5vh]    opacity-95" >
                   
                    <Link to='./favoris'>
                        <p className="text-[5vw] relative cursor-ghibliC hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.95)] dark:hover:drop-shadow-[0_4px_6px_rgba(255,255,255,0.95)] font-semibold z-0 ">
                            FAVORITES
                            <FontAwesomeIcon icon={faStar} className="text-[10vw] absolute top-[-12vw] left-[6vw] opacity-30"  />
                        </p>
                        

                    </Link>
                </div>   
                <div id="mode" className="absolute top-[0.01vw] left-[50vw] " >
                     {   props.mode ==="lightMode" &&  
                        <FontAwesomeIcon icon={faMoon} className="text-[6vw]  text-black border-black rounded-[50%] border-2  p-2 " onClick={()=>props.changeMode('darkMode')}  />
                    }

                    {   props.mode ==="darkMode" &&  
                        <FontAwesomeIcon icon={faSun} className="text-[6vw]  text-white border-white rounded-[50%] border-2  p-2 " onClick={()=>props.changeMode('lightMode')} />
                    }
                </div>    
        </div>
    )
}

export default Burger;